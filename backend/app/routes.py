# app/routes.py: ruta početne stranice

from app import app

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"
