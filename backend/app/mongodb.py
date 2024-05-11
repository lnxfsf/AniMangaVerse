

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


uri = "mongodb+srv://igorlerinc7:UjYq4ggEATW8-M!@cluster0.n3bexs7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))


# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)



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



