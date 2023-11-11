from django.db import models

# Create your models here.
class Anime(models.Model):
    title = models.CharField(max_length=250)
    genre = models.TextField(default=None)

    seasons = models.IntegerField(default=None)

    start_date = models.DateField(default=None)
    end_date = models.DateField(default=None)

    image = models.ImageField(default=None, upload_to='images') 
    background_image = models.ImageField(default=None, upload_to='images') 

    num_of_fav = models.IntegerField(default=None)

    description = models.TextField(default=None)
    
    studio = models.TextField(default=None)
    
    episodes = models.IntegerField(default=0)

    yt_trailer = models.TextField(default=None)




    def __str__(self):
        return self.title