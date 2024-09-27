from urllib.request import urlopen
from pytubefix import YouTube
import json
import re


class YTVideoCore:
    def __init__(
        self,
        url: str,
        all_in: bool = False,
        quality_highest: bool = False,
        quality: str = None,
        file_type: str = "mp4",
        audio: bool = False,
    ):
        self.url = url
        self.quality = quality
        self.highest_res = quality_highest
        self.file_type = file_type
        self.audio = audio
        self.all = all_in

    def yt_core_func(self):
        yt = YouTube(self.url, "WEB_CREATOR")
        print(yt.title)

        if self.audio:
            link = self.yt_audio(yt)
        elif self.highest_res:
            link = self.highest_quality(yt)
        elif self.quality is not None:
            link = self.pick_quality(yt)
        elif self.all:
            link = self.yt_all(yt)
        else:
            link = self.yt_vid(yt)

        print(link)

    # # Example video URL

    def yt_audio(self, yt) -> dict[str:str]:
        streams = yt.streams.filter(res=self.quality, only_audio=True)
        stream_dict = {}
        index = 0
        for stream in streams:
            download_link = stream.url
            stream_dict[index] = download_link
            index += 1

        return stream_dict

    def highest_quality(self, yt) -> dict[str:str]:
        streams = yt.streams.get_highest_resolution()
        stream_dict = {}
        download_link = streams.url
        stream_dict[0] = download_link
        return stream_dict

    def pick_quality(self, yt) -> dict[str:str]:
        streams = yt.streams.get_by_resolution(self.quality)
        stream_dict = {}
        index = 0
        download_link = streams.url
        stream_dict[index] = download_link

        return stream_dict

    def yt_vid(self, yt) -> dict[str:str]:
        streams = yt.streams.filter(
            res=self.quality, file_extension=self.file_type, only_video=True
        )
        stream_dict = {}
        index = 0
        for stream in streams:
            download_link = stream.url
            stream_dict[index] = download_link
            index += 1

        return stream_dict

    def yt_all(self, yt) -> dict[str:str]:
        streams = yt.streams()
        stream_dict = {}
        index = 0
        for stream in streams:
            download_link = stream.url
            stream_dict[index] = download_link
            index += 1

        return stream_dict


ytV = YTVideoCore("https://youtu.be/lWAdaWqlsWE?si=0-33SJRS2-u-Q780", quality="360p")
ytV.yt_core_func()
