# app/routes.py: ruta početne stranice

from app import app

from flask import Flask, jsonify, request

from .mongodb import animes




@app.route('/')
def index():
    return "Hello, World! hi. hello"


@app.route('/ListAnime',methods=['GET'])
def get_animes():
    return jsonify(animes)



@app.route('/ListAnime/<int:pk>/',methods=['GET'])
def anime_detail(pk):


    for anime in animes.values():
        if anime['anime_id'] == pk:
            return jsonify(anime)
    
    return jsonify({'error': 'Anime not found'}), 404




