from django.db import models
from django.utils import timezone

class ImageModel(models.Model):

  image = models.ImageField(upload_to='images/')

  created = models.DateTimeField(default=timezone.now)

class MusicModel(models.Model):

  name = models.CharField(max_length=64)

  singer = models.CharField(max_length=64)

  duration = models.IntegerField()

  music = models.FileField(upload_to='musics/')

  created = models.DateTimeField(default=timezone.now)

class VideoModel(models.Model):

  name = models.CharField(max_length=64)

  video = models.FileField(upload_to='videos/')

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
