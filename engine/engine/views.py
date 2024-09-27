from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .processor.ytlink import link_processor


@api_view(["POST"])
def yt_link(request):
    data = request.data
    link_processor(data["link"])
    return Response()
