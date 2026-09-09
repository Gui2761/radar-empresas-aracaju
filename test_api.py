import asyncio
from app import api_bairros, api_nichos, api_empresas, api_empresa_stitch, api_empresa_mensagens, api_exportar_csv

async def test_api_async():
    bairros_res = await api_bairros()
    assert "Todos" in bairros_res["bairros"]
    print(f"OK: api_bairros retornou {len(bairros_res['bairros'])} bairros.")

    nichos_res = await api_nichos()
    assert "Todos" in nichos_res["nichos"]
    print(f"OK: api_nichos retornou {len(nichos_res['nichos'])} nichos.")

    empresas_res = await api_empresas(sem_site=True)
    assert empresas_res["total"] > 0
    print(f"OK: api_empresas(sem_site=True) retornou {empresas_res['total']} empresas.")

    stitch_res = await api_empresa_stitch("aju-001")
    assert "stitch_prompt" in stitch_res
    print("OK: api_empresa_stitch gerou prompt válido com paleta:", stitch_res["palette"])

    msg_res = await api_empresa_mensagens("aju-001")
    assert len(msg_res["mensagens"]) == 4
    print("OK: api_empresa_mensagens gerou 4 mensagens prontas.")

    csv_res = await api_exportar_csv()
    assert len(csv_res.body) > 100
    print(f"OK: api_exportar_csv gerou CSV com {len(csv_res.body)} bytes.")

if __name__ == "__main__":
    asyncio.run(test_api_async())
    print("\nTODOS OS ENDPOINTS E MÓDULOS FORAM VERIFICADOS E APROVADOS!")
