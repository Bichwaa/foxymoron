from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    author = models.CharField(max_length=100)
    published = models.DateField(auto_now_add=True)
    edited = models.DateField(auto_now=True)

    def __str__(self):
        return self.title



class Wish(models.Model):
    quote = models.TextField()
    quotee = models.CharField(max_length=100)
    published = models.DateField(auto_now_add=True)
    

    def __str__(self):
        return self.quotee