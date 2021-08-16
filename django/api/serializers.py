from rest_framework import serializers

from .models import ImageModel, FileModel, BlogModel, RecentModel

class ImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = ImageModel
    fields = ('__all__')

class FileSerializer(serializers.ModelSerializer):
  class Meta:
    model = FileModel
    fields = ('__all__')

class BlogSerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogModel
    fields = ('__all__')

class RecentSerializer(serializers.ModelSerializer):
  class Meta:
    model = RecentModel
    fields = ('__all__')