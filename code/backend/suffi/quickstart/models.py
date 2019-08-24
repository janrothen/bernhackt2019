from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User

class Category(models.Model):
    icon = models.CharField(max_length=255)
    label = models.SlugField(unique=True, max_length=255)
    help = models.TextField()
