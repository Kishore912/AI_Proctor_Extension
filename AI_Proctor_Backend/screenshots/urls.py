from django.urls import path
from .views import upload_screenshot

urlpatterns = [
    path('', upload_screenshot, name='upload_screenshot'),
]
