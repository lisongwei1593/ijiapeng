$(function(){
    //头部
    var headerHeight = $(".header-bar").height();
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > headerHeight){
            $(".header-bar").css({
                "position":"fixed",
                "background-color":"#fff",
                "box-shadow":"0 0 12px rgba(0, 0, 0, 0.06)"
            });
        }else{
            $(".header-bar").css({
                "position":"absolute",
                "background-color" : "transparent",
                "box-shadow":"none"
            });
        }
        var curHeight=$(document).scrollTop();
        if(curHeight>=600){
            $(".to-top").show();
        }else{
            $(".to-top").hide();
        }
    });
    $(".to-top").click(function(){
        $(window).scrollTop(0);
    });

});
