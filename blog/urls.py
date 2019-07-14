from django.urls import path
from .views import PostListView, PostCreateView, AboutView


app_name = 'blog'
urlpatterns = [
    path('', PostListView.as_view(), name='home'),
    path('add-post/', PostCreateView.as_view(), name='add-post'),
    path('about/', AboutView.as_view(), name='about'),
]