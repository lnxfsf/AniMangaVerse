

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


import os
from dotenv import load_dotenv, dotenv_values 
load_dotenv() 

password = os.environ.get('PASSWORD_MONGODB') or os.getenv("PASSWORD_MONGODB") 
username =  os.environ.get('USERNAME_MONGODB') or os.getenv("USERNAME_MONGODB")


secret_file_path = "../etc/secrets/.env"
# Read the secret from the file
with open(secret_file_path, "r") as file:
    secret = file.read().strip()
# Now you can use the secret
print(secret)

print("sifra je: ", password, secret)
print("username je: ", username)


uri = f"mongodb+srv://{username}:{password}@cluster0.n3bexs7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# to database
database = client['animangaverse']




def getDb():
    if database is None:
        raise Exception({'message': 'database connection not established'})
    
    return database




# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)





