$(function(){
    var headerHeight = $(".header-bar").height();
    var footerHeight = $(".footer").height();
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop <= headerHeight) {
            $(".header-bar").css({
                "position": "relative",
                "box-shadow": "none"
            });
            $(".public-left").css({
                "padding-top":"0"
            });
        }else{
            $(".public-left").css({
                "padding-top":"80px"
            });
        }
        if(scrollTop>=1000){
            $(".public-left").css({
                "position": "relative"
            });
        }else{
            $(".public-left").css({
                "position": "fixed"
            });
        }
    });
});
