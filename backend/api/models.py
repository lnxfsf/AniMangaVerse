from django.db import models

from django.contrib.auth.models import User

# Create your models here.
class Anime(models.Model):
    title = models.CharField(max_length=250)
    genre = models.TextField(default=None)

    seasons = models.IntegerField(default=None)

    start_date = models.DateField(default=None)
    end_date = models.DateField(default=None)


# TODO , implement this ImageField, when you have more knowledge about django..
   # image = models.ImageField(default=None, upload_to='images') 
   # background_image = models.ImageField(default=None, upload_to='images') 

    image = models.URLField(default=None)
    background_image = models.URLField(default=None)


    num_of_fav = models.IntegerField(default=None)

    description = models.TextField(default=None)
    
    studio = models.TextField(default=None)
    
    episodes = models.IntegerField(default=0)

    yt_trailer = models.URLField(default=None)




    def __str__(self):
        return self.title


