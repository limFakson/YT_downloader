import json
from django.shortcuts import render
from pytubefix.exceptions import RegexMatchError
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .processor.vid_core import YTVideoCore
from .processor.func import process


@api_view(["GET"])
def test_view(request):
    return Response({"message": "Connection is open"}, 200)


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
    pros = request.query_params.get("pros")

    if pros == "False":
        pros = False
    else:
        pros = True

    if url is None or keyword is None:
        return Response({"error": "input can't be empty"})

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
