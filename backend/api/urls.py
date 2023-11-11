from django.urls import path
from .views import ListAnime,DetailAnime

urlpatterns = [
    path('<int:pk>/', DetailAnime.as_view()),
    path('', ListAnime.as_view()),
]