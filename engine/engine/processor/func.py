import json
from .vid_core import YTVideoCore


def process(
    keyword: str,
    url: str,
    pros: bool,
    all_in: bool = False,
    quality_highest: bool = False,
    quality: str = None,
    file_type: str = "mp4",
    audio: bool = False,
):

    if keyword == "video":
        core = YTVideoCore(
            url=url,
            all_in=all_in,
            quality_highest=quality_highest,
            quality=quality,
            file_type=file_type,
            audio=audio,
            pros=pros,
        )
        return core
    elif keyword == "shorts":
        core = False
        return core
    elif keyword == "playlist":
        core = False
        return core
