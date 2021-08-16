from django.db import models
from django.utils import timezone

class ImageModel(models.Model):

  width = models.IntegerField()

  height = models.IntegerField()

  image = models.ImageField(upload_to='images/')

  created = models.DateTimeField(default=timezone.now)

class FileModel(models.Model):

  name = models.CharField(max_length=64)

  size = models.IntegerField()

  file = models.FileField(upload_to='files/')

  created = models.DateTimeField(default=timezone.now)

class BlogModel(models.Model):

  title = models.CharField(max_length=64)

  text = models.TextField()

  created = models.DateTimeField(default=timezone.now)

  updated = models.DateTimeField(auto_now=True)

class RecentModel(models.Model):

  type = models.CharField(max_length=8)

  target_id = models.BigIntegerField()