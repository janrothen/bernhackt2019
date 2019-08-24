from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Category, Challenge, Option, ActiveChallenge

class ActiveChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActiveChallenge
        fields = ['challenge', 'valueStart', 'valueGoal', 'user']


class UserSerializer(serializers.ModelSerializer):
    activeChallenges = ActiveChallengeSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups', 'activeChallenges']


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['title', 'co2', 'challenge']


class ChallengeSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Challenge
        fields = ['icon', 'label', 'info', 'max_impact', 'question', 'options', 'category']


class CategorySerializer(serializers.ModelSerializer):
    challenges = ChallengeSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['icon', 'label', 'help', 'challenges']
        depth = 1
