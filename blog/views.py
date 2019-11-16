from django.shortcuts import render
from .models import Post
from .forms import PostForm, WishForm
from django.views.generic import ListView, CreateView, TemplateView
# Create your views here.

class PostListView(ListView):
    
    allow_empty = True 
    model = Post
    template_name = 'blog/post-list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['posts'] = Post.objects.all()
        return context



class PostCreateView(CreateView):
    # model = Post
    form_class = PostForm
    template_name = 'blog/add-post.html'
    success_url = '/' 


class AboutView(TemplateView):
    template_name = 'blog/about.html'

