# -*- coding: utf-8 -*-s

from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.http.response import HttpResponseRedirect
from django.shortcuts import render, render_to_response, redirect
from django.template.context import RequestContext

from forms import LoginForm, RegisterForm


def index(request):
    context = {"page":"home"}
    return render(request, 'wed/index.html', context)


def login(request):  
    if request.method == 'GET':  
        form = LoginForm()  
        register_form = RegisterForm()
        context = {"page":"signin","form": form,"register_form":register_form}
        return render_to_response('wed/signup.html', RequestContext(request, context))  
    else:  
        form = LoginForm(request.POST)  
        if form.is_valid():  
            username = request.POST.get('username', '')  
            password = request.POST.get('password', '')  
            user = auth.authenticate(username=username, password=password)  
            if user is not None and user.is_active:  
                auth.login(request, user)  
                return redirect('/')
            else:  
                return render_to_response('wed/signup.html', RequestContext(request, {'form': form,'password_is_wrong':True}))  
        else:  
            return render_to_response('wed/signup.html', RequestContext(request, {'form': form,}))  

def regist(request):
    if request.method == 'POST':  
        register_form = RegisterForm(request.POST)
        if register_form.is_valid():
            register_form.save()  
            username = request.POST.get('username', '')  
            password = request.POST.get('password', '')  
            user = auth.authenticate(username=username, password=password)  
            if user is not None and user.is_active:  
                auth.login(request, user)  
                return redirect('/')
            else:  
                form = LoginForm()  
                context = {"page":"signin","form": form,"register_form":register_form}
                return render_to_response('wed/signup.html', RequestContext(request, context))  
        else:  
            form = LoginForm()  
            context = {"page":"signin","form": form,"register_form":register_form}
            return render_to_response('wed/signup.html', RequestContext(request, context))  

@login_required  
def logout(request):  
    auth.logout(request)  
    return HttpResponseRedirect("/")  
