import json
from django.shortcuts import render
from pytubefix.exceptions import RegexMatchError
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

    if isinstance(details, dict):
        # Check if there's an error object in details and convert it to a string
        for key, value in details.items():
            if isinstance(value, RegexMatchError):
                details[key] = str(value)

    if "error" in details:
        return JsonResponse(details, status=400)

    return JsonResponse(details, safe=False)
