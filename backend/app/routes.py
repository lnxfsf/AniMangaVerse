# app/routes.py: ruta početne stranice

from app import app

from flask import Flask, jsonify, request, send_file

from .mongodb import *
from pymongo import * 

from bson.objectid import ObjectId


from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


import datetime
import hashlib




@app.route('/')
def index():
    return send_file('./index.html')



@app.route('/api')
def api():
    return "Api"


@app.route('/api/ListAnime',methods=['GET'])
def get_animes():
    try:
        collection = getDb().anime
        animes = list(collection.find())
        
        

        for anime in animes:
            anime['_id'] = str(anime['_id'])

        return jsonify(animes)
    except Exception as e:
        return jsonify({'error': str(e)}), 500



@app.route('/api/Anime/<string:pk>/',methods=['GET'])
def get_anime_detail_test(pk):


    collection = getDb().anime

    # TODO. treba da ide po 'anime_id', 'manga_id' ... ! 
    anime = collection.find_one({ '_id': ObjectId(pk) })

    if anime:
        anime['_id'] = str(anime['_id'])

    return jsonify(anime)



@app.route('/api/Anime/<int:anime_id>/',methods=['GET'])
def get_anime_detail(anime_id):


    collection = getDb().anime

    # TODO. treba da ide po 'anime_id', 'manga_id' ... ! 
    anime = collection.find_one({ 'anime_id' : anime_id })

    if anime:
        anime['_id'] = str(anime['_id'])

    return jsonify(anime)





@app.route('/api/ListManga',methods=['GET'])
def get_manga():
    
    

    

    
    collection = getDb().manga


    mangas = list(collection.find())

    for manga in mangas:
        manga['_id'] = str(manga['_id'])

    return jsonify(mangas)





@app.route('/api/Manga/<string:pk>/',methods=['GET'])
def get_manga_detail_test(pk):


    collection = getDb().manga
     
    # TODO. treba da ide po 'anime_id', 'manga_id' ... ! 
    manga = collection.find_one({ '_id': ObjectId(pk) })

    if manga:
        manga['_id'] = str(manga['_id'])

    return jsonify(manga)


@app.route('/api/Manga/<int:manga_id>/',methods=['GET'])
def get_manga_detail(manga_id):


    collection = getDb().manga
     
    # TODO. treba da ide po 'anime_id', 'manga_id' ... ! 
    manga = collection.find_one({ 'manga_id': manga_id })

    if manga:
        manga['_id'] = str(manga['_id'])

    return jsonify(manga)



@app.route('/api/ListFavorites',methods=['GET'])
def get_favorites():
    collection = getDb().favorites

    favorites = list(collection.find())

    for favorite in favorites:
        favorite['_id'] = str(favorite['_id'])

    return jsonify(favorites)



@app.route('/api/ListFavorites/<string:user_id>',methods=['GET'])
def get_favorites_user(user_id):
    collection = getDb().favorites

    favorites = list(collection.find({ 'user_id': user_id }))

    for favorite in favorites:
        favorite['_id'] = str(favorite['_id'])
        
     
    #manga = collection.find({ 'user_id': user_id })

    #if manga:
    #    manga['_id'] = str(manga['_id'])

    return jsonify(favorites)







# TODO ovo samo secret key ?? da sakrijes..
jwt = JWTManager(app) 
app.config['JWT_SECRET_KEY'] = 'Your_Secret_Key'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1) 




# auth registracija
@app.route("/api/v1/register", methods=["POST"])
def register():
    users_collection = getDb().users

    new_user = request.get_json() 
    new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest() 

    doc = users_collection.find_one({"username": new_user["username"]}) 
    if not doc:
        users_collection.insert_one(new_user)
        return jsonify({'msg': 'User created successfully'}), 201
    else:
        return jsonify({'msg': 'Username already exists'}), 409





@app.route("/api/v1/login", methods=["post"])
def login():


    users_collection = getDb().users

    login_details = request.get_json() 
    user_from_db = users_collection.find_one({'username': login_details['username']})  

    if user_from_db:
        encrpted_password = hashlib.sha256(login_details['password'].encode("utf-8")).hexdigest()
        # msm, on auto kreira sto da pravis user_id, jos uvek nisi napravio tako nesto ?? ovo drugo ..
        user_id=str(user_from_db['_id'])
        email=user_from_db['email']
        username=user_from_db['username']

        if user_from_db['bio']:
            bio=user_from_db['bio']
        else:
            bio=""

        if user_from_db['profile_image']:
            profile_image=user_from_db['profile_image']
        else:
            profile_image=""

        if encrpted_password == user_from_db['password']:
            access_token = create_access_token(identity=user_from_db['username']) 

            # treba string token da bude samo u react. da ne menjas tolko taj FE 
            return jsonify(access_token=access_token,user_id=user_id, email=email, username=username, bio=bio, profile_image=profile_image), 200

    return jsonify({'msg': 'The username or password is incorrect'}), 401




#@app.route("/api/v1/user", methods=["GET"])
#@jwt_required
#def profile():
#    current_user = get_jwt_identity() 
#    user_from_db = users_collection.find_one({'username' : current_user})
#    if user_from_db:
#        del user_from_db['_id'], user_from_db['password'] 
#        return jsonify({'profile' : user_from_db }), 200
#    else:
#        return jsonify({'msg': 'Profile not found'}), 404





# list user info
@app.route("/api/ListUsers", methods=["GET"])
def listUsers():
    collection = getDb().users

    users = list(collection.find())

    for user in users:
        user['_id'] = str(user['_id'])

    return jsonify(users)



# list one user only
@app.route('/api/ListUsers/<string:user_id>',methods=['GET'])
def listUser(user_id):
    collection = getDb().users

    users = list(collection.find({  '_id': ObjectId(user_id) }))

    for user in users:
        user['_id'] = str(user['_id'])
        


    return jsonify(user)




# edit user
@app.route("/api/edituserprofile", methods=["GET","POST"])
def edituserprofile():


    if request.method == "GET":    
        users_collection = getDb().users

        new_user = request.get_json() 
        # user_from_db = users_collection.find_one({ '_id': ObjectId(login_details['user_id']) })




        login_details = request.get_json()
        user_id = login_details.get("user_id")
        username = login_details.get("username")

        pass_confirm = login_details.get("passConfirm") # old password, that's gonna be replaced

        pass_new = login_details.get("passNew") # new pass, that will go 

        bio = login_details.get("bio")
        profile_image = login_details.get("profile_image")
        




        user_from_db = users_collection.find_one({"_id": ObjectId(user_id)})


        if user_from_db:

            # Hash the passConfirm and compare it with the stored password
            hashed_pass_confirm = hashlib.sha256(pass_confirm.encode("utf-8")).hexdigest()
            if hashed_pass_confirm == user_from_db["password"]:
                # Prepare the update document
                update_fields = {}


            if pass_new:
                hashed_pass_new = hashlib.sha256(pass_new.encode("utf-8")).hexdigest()
                update_fields["password"] = hashed_pass_new


            # Update other fields if provided
            if username:
                update_fields["username"] = username

            if bio:
                update_fields["bio"] = bio

            if profile_image:
                update_fields["profile_image"] = profile_image



            # Perform the update
            users_collection.update_one(
                {"_id": ObjectId(user_id)},
                {"$set": update_fields}
            )

            return jsonify({'msg': 'User profile updated successfully'}), 200


        else:
            return jsonify({'msg': 'Current password is incorrect'}), 401

    else:
        return jsonify({'msg': 'User not found'}), 404

