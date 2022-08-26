from django.contrib import admin
from django.urls import path
from anime_app.api.views import *

urlpatterns = [
    path('anime/', GetAnime.as_view(), name ='get-anime' ),
    path('anime/<int:pk>', AnimeDetail.as_view(), name ='anime-detail' ),
]