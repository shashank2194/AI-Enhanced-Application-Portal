from django.db import models
class Application(models.Model):
    STATUS_CHOICES=[('draft','Draft'),('submitted','Submitted')]
    first_name=models.CharField(max_length=100,blank=True)
    last_name=models.CharField(max_length=100,blank=True)
    email=models.EmailField(blank=True)
    status=models.CharField(max_length=20,choices=STATUS_CHOICES,default='draft')
    crm_id=models.CharField(max_length=50,blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"Application #{self.id} ({self.status})"
