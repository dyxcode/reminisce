from rest_framework import serializers

from .models import ImageModel, MusicModel, VideoModel, FileModel, BlogModel

class ImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = ImageModel
    fields = ('__all__')

class MusicSerializer(serializers.ModelSerializer):
  class Meta:
    model = MusicModel
    fields = ('__all__')

class VideoSerializer(serializers.ModelSerializer):
  class Meta:
    model = VideoModel
    fields = ('__all__')

class FileSerializer(serializers.ModelSerializer):
  class Meta:
    model = FileModel
    fields = ('__all__')

class BlogSerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogModel
    fields = ('__all__')