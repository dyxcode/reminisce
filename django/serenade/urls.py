from django.contrib import admin
from django.urls import re_path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    re_path('^api/admin/', admin.site.urls),
    re_path('^api/', include('api.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
