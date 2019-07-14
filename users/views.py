from django.shortcuts import redirect
from django.contrib.auth import login
from django.views.generic import CreateView
from .models import CustomUser
from .forms import CustomUserCreationForm
# Create your views here.


class SignupView(CreateView):
    model = CustomUser
    form_class = CustomUserCreationForm
    template_name = 'registration/signup_form.html'

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('blog: home')