"""
Inicializador do Radar Aju
Inicia o servidor FastAPI e abre o navegador automaticamente.
"""

import uvicorn
import webbrowser
import threading
import time

def open_browser():
    time.sleep(1.5)
    webbrowser.open("http://127.0.0.1:8000")

if __name__ == "__main__":
    print("\n" + "="*60)
    print("📍 RADAR AJU — Inteligência Comercial Aracaju & Região")
    print("="*60)
    print("🚀 Iniciando servidor local na porta 8000...")
    print("🌐 Acesse no seu navegador: http://127.0.0.1:8000")
    print("="*60 + "\n")

    threading.Thread(target=open_browser, daemon=True).start()
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
