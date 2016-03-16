# encoding: utf-8


from django.conf.urls import patterns, url

urlpatterns = patterns('ijiapeng.apps.love.views',
    url(r'^accounts/login/$', 'login', name="login"),  
    url(r'^accounts/logout/$', 'logout', name="logout"), 
    url(r'^accounts/regist/$', 'regist', name="regist"),
    url(r'^about/$', 'about', name="about"), 
    url(r'^contact/$', 'contact', name="contact"), 
    url(r'^comment/$', 'comment', name="comment"),
    url(r'^moments/$', 'moments', name="moments"),
    url(r'^reply_comment/$', 'reply_comment', name="reply_comment"),
    url(r'^del_comment/(?P<cid>\d+)/$','del_comment', name='del_comment'),
    url(r'^$', 'index', name='index'),
)
