from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [path("ytdlp", views.yt_link)]
