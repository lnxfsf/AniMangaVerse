

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


import os
from dotenv import load_dotenv, dotenv_values 
load_dotenv() 

password = os.environ.get("PASSWORD_MONGODB") or os.getenv("PASSWORD_MONGODB") 
username =  os.environ.get("USERNAME_MONGODB") or os.getenv("USERNAME_MONGODB")



uri = f"mongodb+srv://{username}:{password}@cluster0.n3bexs7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&authSource=admin"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# to database
database = client['animangaverse']




def getDb():
    if database is None:
        raise Exception({'message': 'database connection not established'})
    
    return database




# Specify the database and collection you want to read from
# collection = database['authors']


# data = collection.find()

#for item in data:
    # print(item)




# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)




# mora da popuni anime-om ovde... ali bolje samo mongodb konekcija ovde i to je to.. koristis ubuduce samo...



animes = {
    'ONE PIECE': {
        'title': "ONE PIECE",
        'genre': ["adventure", "drama", "crime", "crime", "adventure", "adventure", "adventure"],
        'anime_id': 1,
        'seasons': 20,
        'user_id': 1,
        'start_date': "2024-10-25",
        'end_date': None,
        'image': "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg",
        'background_image': "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
        'num_of_fav': 323,
        'desc': "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.",
        'studio': "Toei Animation",
        'episodes': 420,
        'yt_trailer': "https://www.youtube.com/embed/Ades3pQbeh8?si=MjLoyWbB-T9aOirP"
    },
    # Add more anime data as needed
}



