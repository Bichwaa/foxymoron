from django.forms import ModelForm
from .models import Post, Wish

class PostForm(ModelForm):
    class Meta:
        model = Post
        fields = ['title','body', 'author']




class WishForm(ModelForm):
    class Meta:
        model = Wish
        fields = ['quote','quotee']
        labels={
            'quote':'wish',
            'quotee':'your secret name'
        }