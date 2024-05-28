from django.shortcuts import render
from django.http import JsonResponse
from .models import Screenshot
import base64
from django.core.files.base import ContentFile
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
# Create your views here.

@csrf_exempt
def upload_screenshot(request):
    print(request.method)
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            if 'image' in data:  # Check if 'image' key exists
                image_data = data['image']
                image_data = image_data.split(',')[1]
                # Further processing
                return JsonResponse({'status': 'success'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Image data not found'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON data'}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)

# def upload_screenshot(request,*args,**kwargs):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         image_data = data['image']
#         image_data = image_data.split(',')[1]
#         image_data = base64.b64decode(image_data)
        
#         screenshot = Screenshot()
#         screenshot.image.save('screenshot.png', ContentFile(image_data), save=True)
#         return JsonResponse({'status': 'success'})
#     return JsonResponse({'status': 'error'}, status=400)