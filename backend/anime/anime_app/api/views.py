from rest_framework import generics
from anime_app.api.serializers import *
from anime_app.models import *
from django_filters.rest_framework import DjangoFilterBackend



class GetAnime(generics.ListCreateAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['anime','character','quote']
    
class AnimeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer