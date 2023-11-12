from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .models import Anime
from .serializers import AnimeSerializer



# get AniList data
import requests
from django.http import JsonResponse
import json

def anilist_graphql_view(request):

    # GraphQL API endpoint URL
    graphql_url = 'https://graphql.anilist.co'
    
    
    # Define the GraphQL query
    query = '''
    query ($id: Int) {
      Media (id: $id, type: ANIME) {
        id
        title {
          romaji
          english
          native
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


    if response.status_code == 200:
        # Parse and process the data as needed
        graphql_data = response.json()

        # Return the processed data as JSON
        return JsonResponse({'data': graphql_data})
    else:
        # Handle error cases
        return JsonResponse({'error': 'Failed to fetch data from the AniList GraphQL API'}, status=500)

    




class DetailAnime(generics.RetrieveUpdateDestroyAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    


class ListAnime(generics.ListCreateAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    

 
    
