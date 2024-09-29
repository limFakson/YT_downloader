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

    # Additional query parameters that might or might not exist
    is_all = request.query_params.get("all", False)
    is_heightest = request.query_params.get("is_hgt", False)
    qlty = request.query_params.get("qlty", None)
    ext = request.query_params.get("ext", "mp4")
    aud = request.query_params.get("aud", False)
    pros = request.query_params.get("pros", False)

    core = process(
        keyword,
        url=url,
        audio=aud,
        file_type=ext,
        quality=qlty,
        quality_highest=is_heightest,
        all_in=is_all,
        pros=pros,
    )

    details = core.yt_core_func()

    if isinstance(details, dict):
        for key, value in details.items():
            if isinstance(value, RegexMatchError):
                details[key] = str(value)

    if "error" in details:
        return JsonResponse(details, status=400)

    return JsonResponse(details, safe=False)
