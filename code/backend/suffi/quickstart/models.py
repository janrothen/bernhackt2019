from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User

class Category(models.Model):
    icon = models.CharField(max_length=255)
    label = models.SlugField(unique=True, max_length=255)
    help = models.TextField()

class Challenge(models.Model):
    icon = models.CharField(max_length=255)
    label = models.SlugField(unique=True, max_length=255)
    info = models.TextField()
    max_impact = models.DecimalField(max_digits=10, decimal_places=3)
    question = models.TextField()
    category = models.ForeignKey(Category, related_name='challenges', on_delete=models.CASCADE)

    class Meta:
        ordering = ['max_impact']