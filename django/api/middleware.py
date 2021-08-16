from .serializers import RecentSerializer
import json

class RrcordMiddleware:
  def __init__(self, get_response):
    self.get_response = get_response

  def __call__(self, request):
    response = self.get_response(request)

    uploadField = ['image', 'file', 'blog']
    type = request.path.rsplit('/', 2)[1]
    if request.method == 'POST' and type in uploadField:
      target_id = json.loads(response.content)['id']
      serializer = RecentSerializer(data={'type': type, 'target_id': target_id})
      if serializer.is_valid():
        serializer.save()

    return response