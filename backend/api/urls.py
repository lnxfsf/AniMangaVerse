from django.urls import path
from .views import ListAnime,DetailAnime, anilist_graphql_view

urlpatterns = [
    path('<int:pk>/', DetailAnime.as_view(), name="anime_detail"),
    path('', ListAnime.as_view(), name="anime_list"),

    path('anilist/graphql/', anilist_graphql_view, name='anilist_graphql'),
]