from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [path("digicore/ytdlp", views.yt_link), path("", views.test_view)]
