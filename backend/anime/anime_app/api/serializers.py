from pyexpat import model
from rest_framework import serializers
from anime_app.models import *

class AnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anime
        fields = "__all__"