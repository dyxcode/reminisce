from django.contrib import admin
from .models import ImageModel, FileModel, BlogModel, RecentModel

admin.site.register(ImageModel)

admin.site.register(FileModel)

admin.site.register(BlogModel)

admin.site.register(RecentModel)
