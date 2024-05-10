# app/__init__.py : Instanca aplikacije Flask

from flask import Flask

app = Flask(__name__)

from app import routes
