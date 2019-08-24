from django.shortcuts import render

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from suffi.quickstart.serializers import ActiveChallengeSerializer, UserSerializer, GroupSerializer, CategorySerializer, ChallengeSerializer, OptionSerializer
from suffi.quickstart.models import Category, Challenge, Option, ActiveChallenge


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ChallengeViewSet(viewsets.ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer

class OptionViewSet(viewsets.ModelViewSet):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer

class ActiveChallengeViewSet(viewsets.ModelViewSet):
    queryset = ActiveChallenge.objects.all()
    serializer_class = ActiveChallengeSerializer
