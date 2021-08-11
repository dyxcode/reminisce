from rest_framework import viewsets 

from .models import ImageModel, MusicModel, VideoModel, FileModel, BlogModel
from .serializers import ImageSerializer, MusicSerializer, VideoSerializer, FileSerializer,  BlogSerializer

class ImageViewSet(viewsets.ModelViewSet):
  queryset = ImageModel.objects.all()
  serializer_class = ImageSerializer

class MusicViewSet(viewsets.ModelViewSet):
  queryset = MusicModel.objects.all()
  serializer_class = MusicSerializer

class VideoViewSet(viewsets.ModelViewSet):
  queryset = VideoModel.objects.all()
  serializer_class = VideoSerializer

class FileViewSet(viewsets.ModelViewSet):
  queryset = FileModel.objects.all()
  serializer_class = FileSerializer

class BlogViewSet(viewsets.ModelViewSet):
  queryset = BlogModel.objects.all()
  serializer_class = BlogSerializer
