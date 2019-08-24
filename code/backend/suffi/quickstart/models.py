from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
from django.conf import settings

class Category(models.Model):
    icon = models.CharField(max_length=255)
    label = models.CharField(max_length=255)
    help = models.TextField()

class Challenge(models.Model):
    icon = models.CharField(max_length=255)
    label = models.CharField(max_length=255)
    info = models.TextField()
    max_impact = models.DecimalField(max_digits=10, decimal_places=3)
    question = models.TextField()
    category = models.ForeignKey(Category, related_name='challenges', on_delete=models.CASCADE)

    class Meta:
        ordering = ['max_impact']

class Option(models.Model):
    title = models.CharField(max_length=255)
    co2 = models.DecimalField(max_digits=10, decimal_places=3)
    challenge = models.ForeignKey(Challenge, related_name='options', on_delete=models.CASCADE)

class ActiveChallenge(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='activeChallenges', on_delete=models.CASCADE)
    challenge = models.OneToOneField(Challenge, on_delete=models.CASCADE)
    valueStart = models.OneToOneField(Option, on_delete=models.CASCADE)
    valueGoal = models.OneToOneField(Option, on_delete=models.CASCADE)