from rest_framework import serializers
from .models import Anime

class AnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anime
        fields = ('id', 'title','genre', 'seasons','start_date', 'end_date','num_of_fav','description', 'studio', 'episodes', 'yt_trailer',)
        # fields = '__all__'
        

        