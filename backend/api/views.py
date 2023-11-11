from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .models import Anime
from .serializers import AnimeSerializer




class DetailAnime(generics.RetrieveUpdateDestroyAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    


class ListAnime(generics.ListCreateAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    

 
    
