import json
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .processor.ytlink import YTVideoCore
from .processor.func import process


@api_view(["GET"])
def yt_link(request):
    keyword = request.query_params["keyword"]
    url = request.query_params["url"]

    core = process(keyword, url=url)
    details = core.yt_core_func()

    return JsonResponse(details, safe=False)
