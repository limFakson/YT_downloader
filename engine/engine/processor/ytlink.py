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

        return link

    # # Example video URL

    def yt_audio(self, yt) -> dict[str:str]:
        streams = yt.streams.filter(res=self.quality, only_audio=True)

        stream_list = []

        if streams is None:
            return None

        for stream in streams:
            download_link = stream.url
            stream_list.append(
                {
                    "filename": stream.default_filename,
                    "resolution": f"{stream.width} X {stream.height}",
                    "quality": stream.resolution,
                    "filesize": stream.filesize_mb,
                    "file extension": stream.subtype,
                    "mime_type": stream.mime_type,
                    "url": stream.url,
                }
            )

        return stream_list

    def highest_quality(self, yt) -> dict[str:str]:
        streams = yt.streams.get_highest_resolution()

        if streams is None:
            return None

        stream_list = {
            "filename": streams.default_filename,
            "resolution": f"{streams.width} X {streams.height}",
            "quality": streams.resolution,
            "filesize": streams.filesize_mb,
            "file extension": streams.subtype,
            "mime_type": streams.mime_type,
            "url": streams.url,
        }

        return stream_list

    def pick_quality(self, yt) -> dict[str:str]:
        streams = yt.streams.get_by_resolution(self.quality)

        if streams is None:
            return None

        stream_list = {
            "filename": streams.default_filename,
            "resolution": f"{streams.width} X {streams.height}",
            "quality": streams.resolution,
            "filesize": streams.filesize_mb,
            "file extension": streams.subtype,
            "mime_type": streams.mime_type,
            "url": streams.url,
        }

        return stream_list

    def yt_vid(self, yt) -> dict[str:str]:
        streams = yt.streams.filter(
            res=self.quality, file_extension=self.file_type, only_video=True
        )
        stream_list = []

        if streams is None:
            return None

        for stream in streams:
            download_link = stream.url
            stream_list.append(
                {
                    "filename": stream.default_filename,
                    "resolution": f"{stream.width} X {stream.height}",
                    "quality": stream.resolution,
                    "filesize": stream.filesize_mb,
                    "mime_type": stream.mime_type,
                    "file extension": stream.subtype,
                    "url": stream.url,
                }
            )

        return stream_list

    def yt_all(self, yt) -> dict[str:str]:
        streams = yt.streams()

        stream_list = []

        if streams is None:
            return None

        for stream in streams:
            download_link = stream.url
            stream_list.append(
                {
                    "filename": stream.default_filename,
                    "resolution": f"{stream.width} X {stream.height}",
                    "quality": stream.resolution,
                    "filesize": stream.filesize_mb,
                    "file extension": stream.subtype,
                    "mime_type": stream.mime_type,
                    "url": stream.url,
                }
            )

        return stream_list
