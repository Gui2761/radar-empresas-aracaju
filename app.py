"""
Radar Aju — API de Inteligência Comercial e Prospecção B2B para Aracaju e Região.
Construído com FastAPI, pronto para servir frontend e rotas REST.
"""

from fastapi import FastAPI, Query, HTTPException
from fastapi.responses import HTMLResponse, FileResponse, Response
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import os
import csv
import io

from database import EMPRESAS_DATA, filter_empresas, get_all_bairros, get_all_nichos, get_empresa_by_id
from stitch_generator import generate_stitch_prompt
from outreach_generator import generate_outreach_messages
from scraper import search_osm_aracaju

app = FastAPI(
    title="Radar Aju — Prospecção de Empresas Aracaju & Região",
    description="Motor de busca local com mapas, extração de contatos, gerador de copies e prompts para Google Stitch.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")

# Monta pasta estática
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

@app.get("/", response_class=HTMLResponse)
async def serve_index():
    index_path = os.path.join(STATIC_DIR, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    return "<h1>Radar Aju carregando...</h1>"

@app.get("/api/bairros")
async def api_bairros():
    return {"bairros": ["Todos"] + get_all_bairros()}

@app.get("/api/nichos")
async def api_nichos():
    return {"nichos": ["Todos"] + get_all_nichos()}

@app.get("/api/empresas")
async def api_empresas(
    nicho: Optional[str] = None,
    bairro: Optional[str] = None,
    sem_site: bool = False,
    q: Optional[str] = None
):
    empresas = filter_empresas(nicho=nicho, bairro=bairro, apenas_sem_site=sem_site, query=q)
    return {
        "total": len(empresas),
        "filtros": {"nicho": nicho, "bairro": bairro, "sem_site": sem_site, "q": q},
        "empresas": empresas
    }

@app.get("/api/empresa/{empresa_id}")
async def api_empresa_detalhe(empresa_id: str):
    empresa = get_empresa_by_id(empresa_id)
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa não encontrada")
    return empresa

@app.get("/api/empresa/{empresa_id}/stitch")
async def api_empresa_stitch(empresa_id: str):
    empresa = get_empresa_by_id(empresa_id)
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa não encontrada")
    prompt_data = generate_stitch_prompt(empresa)
    return prompt_data

@app.get("/api/empresa/{empresa_id}/mensagens")
async def api_empresa_mensagens(empresa_id: str):
    empresa = get_empresa_by_id(empresa_id)
    if not empresa:
        raise HTTPException(status_code=404, detail="Empresa não encontrada")
    mensagens = generate_outreach_messages(empresa)
    return {
        "empresa_id": empresa["id"],
        "empresa_nome": empresa["nome"],
        "whatsapp": empresa.get("whatsapp"),
        "whatsapp_raw": empresa.get("whatsapp_raw"),
        "mensagens": mensagens
    }

@app.get("/api/busca-ao-vivo")
async def api_busca_ao_vivo(termo: str = Query(..., min_length=2)):
    """
    Busca em tempo real no OpenStreetMap para empresas em Aracaju.
    """
    leads_ao_vivo = search_osm_aracaju(termo)
    return {
        "termo": termo,
        "total_encontrados": len(leads_ao_vivo),
        "empresas": leads_ao_vivo
    }

@app.get("/api/exportar/csv")
async def api_exportar_csv(
    nicho: Optional[str] = None,
    bairro: Optional[str] = None,
    sem_site: bool = False,
    q: Optional[str] = None
):
    empresas = filter_empresas(nicho=nicho, bairro=bairro, apenas_sem_site=sem_site, query=q)
    
    output = io.StringIO()
    writer = csv.writer(output, delimiter=";", quoting=csv.QUOTE_MINIMAL)
    writer.writerow(["Nome", "Nicho", "Bairro", "Cidade", "WhatsApp", "Telefone", "Instagram", "Tem Site?", "Website", "Nota Google", "Avaliações", "Oportunidade Digital"])
    
    for e in empresas:
        writer.writerow([
            e.get("nome"),
            e.get("nicho"),
            e.get("bairro"),
            e.get("cidade"),
            e.get("whatsapp"),
            e.get("telefone"),
            e.get("instagram"),
            "Sim" if e.get("website") else "Não",
            e.get("website") or "Sem site",
            e.get("google_rating"),
            e.get("google_reviews_count"),
            e.get("oportunidade_digital")
        ])
        
    csv_bytes = output.getvalue().encode("utf-8-sig")
    return Response(
        content=csv_bytes,
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=leads_aracaju.csv"}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
