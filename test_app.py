import sys
from database import filter_empresas, get_all_bairros, get_all_nichos, get_empresa_by_id
from stitch_generator import generate_stitch_prompt
from outreach_generator import generate_outreach_messages
from scraper import search_osm_aracaju

def test_database():
    bairros = get_all_bairros()
    assert len(bairros) > 5, "Deveria ter pelo menos 5 bairros"
    
    nichos = get_all_nichos()
    assert len(nichos) > 5, "Deveria ter pelo menos 5 nichos"
    
    todas = filter_empresas()
    assert len(todas) >= 15, "Deveria ter pelo menos 15 empresas"
    
    sem_site = filter_empresas(apenas_sem_site=True)
    assert len(sem_site) > 0, "Deveria ter empresas sem site"
    assert all(e["website"] is None for e in sem_site)
    
    jardins = filter_empresas(bairro="Jardins")
    assert len(jardins) > 0, "Deveria encontrar empresas no bairro Jardins"
    
    print(f"OK: Database com {len(todas)} empresas, {len(bairros)} bairros, {len(nichos)} nichos.")

def test_stitch_generator():
    emp = filter_empresas()[0]
    res = generate_stitch_prompt(emp)
    assert "stitch_prompt" in res
    assert "[GOOGLE STITCH PROTOTYPE SPECIFICATION" in res["stitch_prompt"]
    assert "palette" in res
    assert len(res["stitch_prompt"]) > 500
    print(f"OK: Stitch Generator gerou especificação com {len(res['stitch_prompt'])} caracteres.")

def test_outreach_generator():
    emp = filter_empresas()[0]
    msgs = generate_outreach_messages(emp)
    assert len(msgs) == 4, "Deveriam ser 4 modelos de abordagem"
    assert all("wa_link" in m for m in msgs)
    assert all(m["wa_link"].startswith("https://wa.me/") for m in msgs)
    print(f"OK: Outreach Generator gerou 4 modelos de abordagem com links wa.me validados.")

if __name__ == "__main__":
    test_database()
    test_stitch_generator()
    test_outreach_generator()
    print("\nTODOS OS TESTES UNITÁRIOS PASSARAM COM 100% DE SUCESSO!")
