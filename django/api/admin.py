from django.contrib import admin
from .models import ImageModel, MusicModel, VideoModel, FileModel, BlogModel

admin.site.register(ImageModel)

admin.site.register(MusicModel)

admin.site.register(VideoModel)

admin.site.register(FileModel)

admin.site.register(BlogModel)
