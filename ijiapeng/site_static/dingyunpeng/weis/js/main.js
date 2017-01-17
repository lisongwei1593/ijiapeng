$(window).load(function(){
    $(function(){
        //判断浏览器是否支持placeholder属性
        supportPlaceholder='placeholder'in document.createElement('input'),
            placeholder=function(input){
                var text = input.attr('placeholder'),
                    defaultValue = input.defaultValue;
                if(!defaultValue){
                    input.val(text).addClass("phcolor");
                }
                input.focus(function(){
                    if(input.val() == text){
                        $(this).val("");
                    }
                });
                input.blur(function(){
                    if(input.val() == ""){
                        $(this).val(text).addClass("phcolor");
                    }
                });
                //输入的字符不为灰色
                input.keydown(function(){
                    $(this).removeClass("phcolor");
                });
            };
        //当浏览器不支持placeholder属性时，调用placeholder函数
        if(!supportPlaceholder){
            $('input').each(function(){
                text = $(this).attr("placeholder");
                if($(this).attr("type") == "text"){
                    placeholder($(this));
                }
            });
        }
        $(window).scroll(function(){
            var curHeight=$(document).scrollTop();
            if(curHeight>=600){
                $(".searchFix").slideDown();
                $(".to-top").show();
            }else{
                $(".searchFix").slideUp();
                $(".to-top").hide();
            }
        });
        $(".to-top").click(function(){
            $(window).scrollTop(0);
        });
    });
    $(document).ready(function(){
        $(".login").click(function(){
            $("#state-box-login").show();
            $(".state-box-closebtn,.state-box-btn>a").click(function(){
                $("#state-box-login").css("display","none");
            });
        });
        $(".Register_now").click(function(){
            $("#state-box-login").hide();
            $("#state-box-register").show();
        });
        $(".Direct_login").click(function(){
            $("#state-box-login").show();
            $("#state-box-register").hide();
        });
        $(".register").click(function(){
            $("#state-box-register").show();
            $(".state-box-closebtn,.state-box-btn>a").click(function(){
                $("#state-box-register").css("display","none");
            });
        });
//            $(".entry-input input").click(function(){
//                $(this).hasClass("error")? $(this).siblings(".waring").show():$(this).siblings(".waring").hide();
//            });
//            OnfocusFun
        $(".piaochecked").click(function(){
            $(this).hasClass("on_check")? $(this).removeClass("on_check"):$(this).addClass("on_check");
        });
    });
});



