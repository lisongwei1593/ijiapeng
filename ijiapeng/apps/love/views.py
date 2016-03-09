# -*- coding: utf-8 -*-s

from django.contrib import auth
from django.shortcuts import render, render_to_response
from django.template.context import RequestContext

from forms import LoginForm


def index(request):
    print "vvvsd"
    context = {}
    return render(request, 'wed/index.html', context)


def login(request):  
    if request.method == 'GET':  
        form = LoginForm()  
        return render_to_response('wed/signup.html', RequestContext(request, {'form': form,}))  
    else:  
        form = LoginForm(request.POST)  
        if form.is_valid():  
            username = request.POST.get('username', '')  
            password = request.POST.get('password', '')  
            user = auth.authenticate(username=username, password=password)  
            if user is not None and user.is_active:  
                auth.login(request, user)  
                return render_to_response('index.html', RequestContext(request))  
            else:  
                return render_to_response('login.html', RequestContext(request, {'form': form,'password_is_wrong':True}))  
        else:  
            return render_to_response('login.html', RequestContext(request, {'form': form,}))  
