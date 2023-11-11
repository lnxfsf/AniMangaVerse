from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .models import Anime
from .serializers import AnimeSerializer

class DetailAnime(generics.ListAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    


class ListAnime(generics.ListAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    
