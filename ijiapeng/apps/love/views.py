# -*- coding: utf-8 -*-s

from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.http.response import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, render_to_response, redirect
from django.template.context import RequestContext
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from forms import LoginForm, RegisterForm
from ijiapeng.apps.love.models import Comment


def index(request):
    context = {"page_name":"home"}
    return render(request, 'wed/index.html', context)


def login(request):  
    register_form = RegisterForm()
    if request.method == 'GET':  
        form = LoginForm()  
        context = {"page_name":"signin","form": form,"register_form":register_form}
        return render_to_response('wed/signup.html', RequestContext(request, context))  
    else:  
        form = LoginForm(request.POST)  
        if form.is_valid():  
            username = request.POST.get('username', '')  
            password = request.POST.get('password', '')  
            user = auth.authenticate(username=username, password=password)  
            if user is not None and user.is_active:  
                auth.login(request, user)  
                if request.GET.get('next'):
                    return HttpResponseRedirect(request.GET.get('next'))
                else:
                    return HttpResponseRedirect("/")  
            else:  
                return render_to_response('wed/signup.html', RequestContext(request, {'form': form,'password_is_wrong':True,'register_form':register_form}))  
        else:  
            return render_to_response('wed/signup.html', RequestContext(request, {'form': form,'register_form':register_form}))  

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
def comment(request):
    if request.method == 'GET':  
        all_comments = Comment.objects.all().order_by('-created_datetime')
        page = request.GET.get('page')
        paginator = Paginator(all_comments, 10)
        page_name = "comment"
        try:
            comments = paginator.page(page)
        except PageNotAnInteger:
            # If page is not an integer, deliver first page.
            comments = paginator.page(1)
        except EmptyPage:
            # If page is out of range (e.g. 9999), deliver last page of results.
            comments = paginator.page(paginator.num_pages)
#         return render_to_response('wed/comment.html', RequestContext(request, comments)) 
        return render(request, 'wed/comment.html', locals()) 
    if request.method == 'POST':  
        user = request.user
        comment_text = request.POST.get("comment_text")
        Comment.objects.create(user=user,text=comment_text)
        return redirect("/comment")
    
    
@login_required  
def reply_comment(request):
    if request.method == 'POST':  
        comment_id = request.POST.get('comment_id')
        comment_text = request.POST.get("reply_text")
        print comment_id,
        comment = Comment.objects.get(id=comment_id)
        comment.reply = comment_text
        comment.save()
        return redirect("/comment")
    

def about(request):
    context = {"page_name":"about"}
    return render(request, 'wed/about.html', context)


def contact(request):
    context = {"page_name":"contact"}
    return render(request, 'wed/contact.html', context)


def moments(request):
    context = {"page_name":"moments"}
    return render(request, 'wed/moments.html', context)
    
    
@login_required  
def del_comment(request,cid):
    try:
        comment = Comment.objects.get(id=cid)
        comment.delete()
        return redirect("/comment")
    except:
        return redirect("/comment")


@login_required  
def logout(request):  
    auth.logout(request)  
    return HttpResponseRedirect("/")  
