from django.db import models

# Create your models here.

class Screenshot(models.Model):
    image = models.ImageField(upload_to='screenshots/')
    timestamp = models.DateTimeField(auto_now_add=True)
