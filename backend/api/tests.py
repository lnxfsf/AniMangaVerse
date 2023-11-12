
from django.test import TestCase
from .models import Anime


# api endpoints test
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient


# test for models, database
class ApiModelTest(TestCase):

    # create database
    @classmethod
    def setUpTestData(cls):
        Anime.objects.create(
            title="hello",
            genre="horror",
            seasons=20,
            start_date="2023-03-17",
            end_date="2023-03-17",
            image="https://img.com/",
            background_image="https://img.com/",
            num_of_fav=3,
            description="My anime",
            studio="Shinka",
            episodes=35,
            yt_trailer="https://yts.mx/"
        )

    # and then check (test) each field
    def test_title_content(self):
        api = Anime.objects.get(id=1)  
        expected_object_name = f'{api.title}' 
        self.assertEquals(expected_object_name, 'hello')  

    def test_genre_content(self):
        api = Anime.objects.get(id=1)
        expected_object_name = f'{api.genre}'
        self.assertEquals(expected_object_name, 'horror')

    def test_season_content(self):
        api = Anime.objects.get(id=1)
        expected_object_name = f'{api.seasons}'
        self.assertEquals(expected_object_name, '20')

    def test_start_date_content(self):
        api = Anime.objects.get(id=1)
        expected_object_name = f'{api.start_date}'
        self.assertEquals(expected_object_name, "2023-03-17")

    def test_end_date_content(self):
        api = Anime.objects.get(id=1)
        expected_object_name = f'{api.end_date}'
        self.assertEquals(expected_object_name, "2023-03-17")

    def test_num_of_fav_content(self):
        api = Anime.objects.get(id=1)
        expected_object_name = f'{api.num_of_fav}'
        self.assertEquals(expected_object_name, '3')

    def test_description_content(self):
        api = Anime.objects.get(id=1)
        expected_object_name = f'{api.description}'
        self.assertEquals(expected_object_name, "My anime")

    def test_studio_content(self):
        api = Anime.objects.get(id=1)
        expected_object_name = f'{api.studio}'
        self.assertEquals(expected_object_name, "Shinka")

    def test_episodes_content(self):
        api = Anime.objects.get(id=1)
        expected_object_name = f'{api.episodes}'
        self.assertEquals(expected_object_name, '35')

    def test_yt_trailer_content(self):
        api = Anime.objects.get(id=1)
        expected_object_name = f'{api.yt_trailer}'
        self.assertEquals(expected_object_name, "https://yts.mx/")




# api endpoints test
class ApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.api_url = reverse('anime_list')  

    def test_create_and_retrieve_anime(self):
        # Test POST request to create an anime
        data = {
            "title": "hello",
            "genre": "horror",
            "seasons": 20,
            "start_date": "2023-03-17",
            "end_date": "2023-03-17",
            "image": "https://img.com/",
            "background_image": "https://img.com/",
            "num_of_fav": 3,
            "description": "My anime",
            "studio": "Shinka",
            "episodes": 35,
            "yt_trailer": "https://yts.mx/"
        }
        response = self.client.post(self.api_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        anime_id = response.data['id']

        # Test GET request to retrieve the created anime
        response = self.client.get(reverse('anime_detail', kwargs={'pk': anime_id}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'hello')

    def test_update_anime(self):
        # Create an anime to update
        anime = Anime.objects.create(
            title="hello",
            genre="horror",
            seasons=20,
            start_date="2023-03-17",
            end_date="2023-03-17",
            image="https://img.com/",
            background_image="https://img.com/",
            num_of_fav=3,
            description="My anime",
            studio="Shinka",
            episodes=35,
            yt_trailer="https://yts.mx/"
        )

        # Test PUT request to update the anime
        data = {
            "title": "Updated Anime",
            "genre": "Action",
            "seasons": 6,
            "start_date": "2023-01-01",
            "end_date": "2023-01-01",
            "image": "https://img.com/",
            "background_image": "https://img.com/",
            "num_of_fav": 5,
            "description": "Updated description",
            "studio": "Updated Studio",
            "episodes": 42,
            "yt_trailer": "https://updated-yts.mx/"
        }
        response = self.client.put(reverse('anime_detail', kwargs={'pk': anime.id}), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Updated Anime')

    def test_delete_anime(self):
        # Create an anime to delete
        anime = Anime.objects.create(
            title="hello",
            genre="horror",
            seasons=20,
            start_date="2023-03-17",
            end_date="2023-03-17",
            image="https://img.com/",
            background_image="https://img.com/",
            num_of_fav=3,
            description="My anime",
            studio="Shinka",
            episodes=35,
            yt_trailer="https://yts.mx/"
        )

        # Test DELETE request to delete the anime
        response = self.client.delete(reverse('anime_detail', kwargs={'pk': anime.id}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        # Verify that the anime is deleted
        with self.assertRaises(Anime.DoesNotExist):
            Anime.objects.get(id=anime.id)
