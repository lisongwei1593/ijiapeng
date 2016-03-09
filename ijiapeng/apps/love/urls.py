# encoding: utf-8


from django.conf.urls import patterns, url

urlpatterns = patterns('ijiapeng.apps.love.views',
    url(r'^accounts/login/$', 'login', name="login"),  
    url(r'^accounts/logout/$', 'logout', name="logout"), 
    url(r'^accounts/regist/$', 'regist', name="regist"), 
    url(r'^$', 'index', name='index'),
)
