from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .models import Anime
from .serializers import AnimeSerializer



# get AniList data
import requests
from django.http import JsonResponse
import json





def format_anime_data(graphql_data):
    media_data = graphql_data['data']['Media']

    # Transform genres list into a single string
    genres_string = "; ".join(media_data['genres'])
    
    # date convert to what we need, startDate
    start_date = graphql_data['data']['Media']['startDate']
    year = start_date['year']
    month = start_date['month']
    day = start_date['day']


    formatted_start_date = f"{year:04d}-{month:02d}-{day:02d}"


    # date convert to what we need, endDate
    start_date = graphql_data['data']['Media']['endDate']
    year = start_date['year']
    month = start_date['month']
    day = start_date['day']


    formatted_end_date = f"{year:04d}-{month:02d}-{day:02d}"


    #  TODO just add medium, large, extraLarge. but don't mess with frontend too much. you need to write tests for this addition, if you want to add them ...

    # add image, cover
    image = media_data['coverImage']['large']





    # Create a dictionary in the desired format
    formatted_data = {
        "id": media_data['id'],
        "title": media_data['title']['english'],
        "genre": genres_string,
        "season": media_data['season'],
        "start_date": formatted_start_date, 
        "end_date": formatted_end_date, 
        "image": image,
        "background_image": media_data['bannerImage'],
        "num_of_fav": media_data['favourites'],
        "description": media_data['description'],
        "episodes" : media_data['episodes'],
        "yt_trailer": media_data['trailer'], # TODO, he will return just main url, and everything else is frontend job to handle !!!











    }

    return formatted_data

def anilist_graphql_view(request):
    # Assuming you have the GraphQL response data stored in a variable named graphql_data
    

    # GraphQL API endpoint URL
    graphql_url = 'https://graphql.anilist.co'
    
    
    # Define the GraphQL query
    query = '''


	query ($id: Int) {
      Media (id: $id, type: ANIME) {
        id
        title {
          english          
        }
        genres
    		season
      	startDate {
      	  year
      	  month
      	  day
      	}
      endDate {
        year
        month
        day
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      favourites
      description
      episodes
      trailer {
        id
      }
      
      
      
      }
    }
    '''
        
    
    # Define query variables
    variables = {
        'id': 15125,
    }

    # Prepare headers
    headers = {
        'Content-Type': 'application/json',
    }

    # Prepare the request payload
    payload = {
        'query': query,
        'variables': variables,
    }
    

    # Make a POST request to the AniList GraphQL API
    response = requests.post(graphql_url, headers=headers, json=payload)




    graphql_data = response.json()

    # Format the data
    formatted_data = format_anime_data(graphql_data)

    # Return the formatted data as JSON
    return JsonResponse(formatted_data)
    
    
    # usual graphql response
    #return JsonResponse(graphql_data)
    
    

    # Return the processed data as JSON
    #return JsonResponse({'data': graphql_data})

#
#def anilist_graphql_view(request):
#
#    # GraphQL API endpoint URL
#    graphql_url = 'https://graphql.anilist.co'
#    
#    
#    # Define the GraphQL query
#    query = '''
#
#
#	query ($id: Int) {
#      Media (id: $id, type: ANIME) {
#        id
#        title {
#          english          
#        }
#        genres
#    		season
#      	startDate {
#      	  year
#      	  month
#      	  day
#      	}
#      endDate {
#        year
#        month
#        day
#      }
#      coverImage {
#        extraLarge
#        large
#        medium
#        color
#      }
#      bannerImage
#      favourites
#      description
#      episodes
#      trailer {
#        id
#      }
#      
#      
#      
#      }
#    }
#    '''
#        
#    
#    # Define query variables
#    variables = {
#        'id': 15125,
#    }
#
#    # Prepare headers
#    headers = {
#        'Content-Type': 'application/json',
#    }
#
#    # Prepare the request payload
#    payload = {
#        'query': query,
#        'variables': variables,
#    }
#    
#
#    # Make a POST request to the AniList GraphQL API
#    response = requests.post(graphql_url, headers=headers, json=payload)
#
#    # Extract relevant data
#    media_data = response['data']['data']['Media']
#
#    # Transform genres list into a single string
#    genres_string = "; ".join(media_data['genres'])
#
#    # Create a new dictionary in the desired format
#    transformed_data = {
#        "id": media_data['id'],
#        "title": media_data['title']['english'],
#        "genre": genres_string,
#        # Add other fields as needed
#    }
#
#    # Now, transformed_data contains the data in the desired format
#    return JsonResponse(transformed_data)
#
#
#
#
#   # if response.status_code == 200:
#   #     # Parse and process the data as needed
#   #     graphql_data = response.json()
#
#   #     # Return the processed data as JSON
#   #     return JsonResponse({'data': graphql_data})
#   # else:
#   #     # Handle error cases
#   #     return JsonResponse({'error': 'Failed to fetch data from the AniList GraphQL API'}, status=500)
#
#    




class DetailAnime(generics.RetrieveUpdateDestroyAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    


class ListAnime(generics.ListCreateAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    

 
    
