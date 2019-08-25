from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Category, Challenge, Option, ActiveChallenge, Trophy

class ActiveChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActiveChallenge
        fields = ['id', 'challenge', 'valueStart', 'valueGoal', 'user']


class UserSerializer(serializers.ModelSerializer):
    activeChallenges = ActiveChallengeSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'groups', 'activeChallenges']


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'url', 'name']


class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['id', 'title', 'co2', 'challenge']

class TrophySerializer(serializers.ModelSerializer):
    class Meta:
        model = Trophy
        fields = ['id', 'icon', 'label', 'challenge']

class ChallengeSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Challenge
        fields = ['id', 'icon', 'label', 'info', 'max_impact', 'question', 'options', 'trophy', 'category']


class CategorySerializer(serializers.ModelSerializer):
    challenges = ChallengeSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'icon', 'label', 'help', 'challenges']
        depth = 1
