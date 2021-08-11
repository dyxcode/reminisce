from rest_framework import routers
from . import views

router = routers.SimpleRouter()
router.register(r'image', views.ImageViewSet)
router.register(r'music', views.MusicViewSet)
router.register(r'video', views.VideoViewSet)
router.register(r'file', views.FileViewSet)
router.register(r'blog', views.BlogViewSet)

urlpatterns = router.urls
