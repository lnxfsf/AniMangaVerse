# app/routes.py: ruta početne stranice

from app import app

from flask import Flask, jsonify, request

from .mongodb import *
from pymongo import * 

from bson.objectid import ObjectId


@app.route('/')
def index():
    return "Hello, World! hi. hello"


@app.route('/ListAnime',methods=['GET'])
def get_animes():
    

    collection = getDb().anime
    animes = list(collection.find())

    for anime in animes:
        anime['_id'] = str(anime['_id'])

    return jsonify(animes)



@app.route('/ListAnime/<string:pk>/',methods=['GET'])
def get_anime_detail(pk):


    collection = getDb().anime

    # TODO. treba da ide po 'anime_id', 'manga_id' ... ! 
    anime = collection.find_one({ '_id': ObjectId(pk) })

    if anime:
        anime['_id'] = str(anime['_id'])

    return jsonify(anime)








@app.route('/ListManga',methods=['GET'])
def get_manga():
    
    
    collection = getDb().manga

    mangas = list(collection.find())

    for manga in mangas:
        manga['_id'] = str(manga['_id'])

    return jsonify(mangas)



@app.route('/ListManga/<string:pk>/',methods=['GET'])
def get_manga_detail(pk):


    collection = getDb().manga
     
    # TODO. treba da ide po 'anime_id', 'manga_id' ... ! 
    manga = collection.find_one({ '_id': ObjectId(pk) })

    if manga:
        manga['_id'] = str(manga['_id'])

    return jsonify(manga)





#TODO: on ce na FE, da otvara ovaj link za prikaz favorites, tako sto pošalje user_id, i onda na FE, on ce znati, koje tačno njemu da pošalje
@app.route('/ListFavorites',methods=['GET'])
def get_favorites():
    collection = getDb().favorites

    favorites = list(collection.find())

    for favorite in favorites:
        favorite['_id'] = str(favorite['_id'])

    return jsonify(favorites)



# TODO, na frontend, taj komponenta za favorites, sada ce trebati samo da otvori link, pod ovim user_id -om, i dobije listu fetched sve što i treba. i to je bukvalno to ! na FE, comment out, onu logiku što si koristio da filtiraš sam ručno preko user_id-a, ovaj put, sada ce dobijati samo za tog korisnika po default-u. da, to tek treba da namestis poziv ka BE u FE, kako ces, al sve je u listi na data.js, i to bi da koristim kao cache samim time..  (da u data.js, namesti logiku, da proveri prvo lokalni cache, ako nema, e onda pravi request. veruj mi, mnogo brze nego da pravi request svaki put ! )
@app.route('/ListFavorites/<int:user_id>',methods=['GET'])
def get_favorites_user(user_id):
    collection = getDb().favorites

    favorites = list(collection.find({ 'user_id': user_id }))

    for favorite in favorites:
        favorite['_id'] = str(favorite['_id'])
        
     
    #manga = collection.find({ 'user_id': user_id })

    #if manga:
    #    manga['_id'] = str(manga['_id'])

    return jsonify(favorites)

