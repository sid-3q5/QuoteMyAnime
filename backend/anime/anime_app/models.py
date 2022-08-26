from django.db import models

# Create your models here.

class Anime(models.Model):
    anime = models.CharField(max_length=255, null=True)
    character = models.CharField(max_length=255, null=True)
    quote = models.CharField(max_length=255, null=True)
    