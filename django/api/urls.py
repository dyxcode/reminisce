from rest_framework import routers
from django.urls import re_path
from . import views

router = routers.SimpleRouter()
router.register(r'image', views.ImageViewSet)
router.register(r'file', views.FileViewSet)
router.register(r'blog', views.BlogViewSet)

urlpatterns = [
  re_path(r'^recent/$', views.RecentList.as_view()),
]

urlpatterns += router.urls
