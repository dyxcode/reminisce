from rest_framework import viewsets, generics

from .models import ImageModel, FileModel, BlogModel, RecentModel
from .serializers import ImageSerializer, FileSerializer,  BlogSerializer, RecentSerializer

class ImageViewSet(viewsets.ModelViewSet):
  queryset = ImageModel.objects.all()
  serializer_class = ImageSerializer

class FileViewSet(viewsets.ModelViewSet):
  queryset = FileModel.objects.all()
  serializer_class = FileSerializer

class BlogViewSet(viewsets.ModelViewSet):
  queryset = BlogModel.objects.all()
  serializer_class = BlogSerializer

class RecentList(generics.ListAPIView):
  queryset = RecentModel.objects.all()
  serializer_class = RecentSerializer
