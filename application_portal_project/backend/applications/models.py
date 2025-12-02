from django.db import models
from django.conf import settings
class Application(models.Model):
    STATUS=[("draft","Draft"),("submitted","Submitted")]
    user=models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    first_name=models.CharField(max_length=100,blank=True)
    last_name=models.CharField(max_length=100,blank=True)
    email=models.EmailField(blank=True)
    status=models.CharField(max_length=20,choices=STATUS,default="draft")
    crm_id=models.CharField(max_length=50,blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    def __str__(self): return f"Application #{self.id} ({self.status})"