# -*- coding: utf-8 -*-s
from django import forms  
from ijiapeng.apps.love.models import CustomUser 
  
class LoginForm(forms.Form):  
    username = forms.CharField(  
        required=True,  
        label=u"用户名",  
        error_messages={'required': '请输入用户名'},  
        widget=forms.TextInput(  
            attrs={  
                'placeholder':u"用户名",  
            }  
        ),  
    )      
    password = forms.CharField(  
        required=True,  
        label=u"密码",  
        error_messages={'required': u'请输入密码'},  
        widget=forms.PasswordInput(  
            attrs={  
                'placeholder':u"密码",  
            }  
        ),  
    )     
    def clean(self):  
        if not self.is_valid():  
            raise forms.ValidationError(u"用户名和密码为必填项")  
        else:  
            cleaned_data = super(LoginForm, self).clean() 

class RegisterForm(forms.Form):
    username = forms.CharField(
        label=u'用户名',
        help_text=u'昵称可用于登录，不能包含空格和@字符。',
        max_length=20,
        initial='',
        widget=forms.TextInput(attrs={'class': 'form-control','placeholder':u"用户名",  }),
        )

    password = forms.CharField(
        label=u'密码',
        help_text=u'密码只有长度要求，长度为 6 ~ 18 。',
        min_length=6,
        max_length=18,
        widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder':u"密码",  }),
        )

    confirm_password = forms.CharField(
        label=u'确认密码',
        min_length=6,
        max_length=18,
        widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder':u"确认密码",  }),
        )

    def clean_username(self):
        username = self.cleaned_data['username']
        if ' ' in username or '@' in username:
            raise forms.ValidationError(u'昵称中不能包含空格和@字符')
        res = CustomUser.objects.filter(username=username)
        if len(res) != 0:
            raise forms.ValidationError(u'此昵称已经注册，请重新输入')
        return username

    def clean(self):
        cleaned_data = super(RegisterForm, self).clean()
        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get('confirm_password')
        if password and confirm_password:
            if password != confirm_password:
                raise forms.ValidationError(u'两次密码输入不一致，请重新输入')

    def save(self):
        username = self.cleaned_data['username']
        password = self.cleaned_data['password']
        user = CustomUser.objects.create_user(username,None,password)
        user.save()  