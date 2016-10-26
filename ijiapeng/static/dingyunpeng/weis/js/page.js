
(function ($) {
  //默认参数
  var defaults = {
    //id : '#paging',//id
    leng: 6,//总页数
    activeClass: 'page-active' ,//active类
    firstPage: '首页',//
    lastPage: '末页',
    prv: '<',
    next: '>',
  };
  //扩展
  $.fn.extend({
    //插件名称
    page: function (options) {
      //覆盖默认参数
      var opts = $.extend(defaults, options);
      //主函数
      return this.each(function () {
        //激活事件
        var obj = $(this);
        var str1 = '';
        var str = '';
        var l = opts.leng;
        if (l > 1&&l < 7) {
          str1 = '<li><a href="javascript:" class="'+ opts.activeClass +'">1</a></li>';
          for (i = 2; i < l + 1; i++) {
            str += '<li><a href="javascript:">' + i + '</a></li>';
          }
        }else if(l > 7){
          str1 = '<li><a href="javascript:" class="'+ opts.activeClass +'">1</a></li>';
          for (i = 2; i < 7; i++) {
            str += '<li><a href="javascript:">' + i + '</a></li>';
          }
          //str += '<li><a href="javascript:">...</a></li>'
        } else {
          str1 = '<li><a href="javascript:" class="'+ opts.activeClass +'">1</a></li>';
        }
        obj.html( '</div><div class="last" style="float:right">' + opts.lastPage +'</div><div class="nxt" style="float:right">' + opts.next + '</div><ul class="pagingUl">' + str1 + str + '</ul>' + '</div><div class="prv" style="float:right">' + opts.prv + '</div>'+ '</div><div class="first" style="float:right">' + opts.firstPage);
        
        obj.on('click', '.nxt', function () {
          var pageshow = parseInt($('.' + opts.activeClass).html());
          if(pageshow == l) {
          }else if(pageshow > l-3&&pageshow < l){
            $('.' + opts.activeClass).removeClass(opts.activeClass).parent().next().find('a').addClass(opts.activeClass);
          }else if(pageshow > 0&&pageshow < 4){
            $('.' + opts.activeClass).removeClass(opts.activeClass).parent().next().find('a').addClass(opts.activeClass);
          }else {
            $('.' + opts.activeClass).removeClass(opts.activeClass).parent().next().find('a').addClass(opts.activeClass);
            fpageShow();
          }
        });
        obj.on('click', '.prv', function () {
          var pageshow = parseInt($('.' + opts.activeClass).html());
          if (pageshow == 1) {
          }else if(pageshow > l-3&&pageshow < l+1){
            $('.' + opts.activeClass).removeClass(opts.activeClass).parent().prev().find('a').addClass(opts.activeClass);
                  //this.fpageBranch(pageshow-1);
          }else if(pageshow > 1&&pageshow < 4){
            $('.' + opts.activeClass).removeClass(opts.activeClass).parent().prev().find('a').addClass(opts.activeClass);
                  //this.fpageBranch(pageshow-1);
          }else {
            $('.' + opts.activeClass).removeClass(opts.activeClass).parent().prev().find('a').addClass(opts.activeClass);
                    //this.fpageBranch(pageshow-1);
            fpageShow();
          }
        });

        obj.on('click', '.first', function(){
          var pageshow = 1;
          $('.' + opts.activeClass).removeClass(opts.activeClass).parent().prev().find('a').addClass(opts.activeClass);
          fpagePrv(0);
        })
        obj.on('click', '.last', function(){
          var pageshow = l;
          if(l>6){
            $('.' + opts.activeClass).removeClass(opts.activeClass).parent().prev().find('a').addClass(opts.activeClass);
            fpageNext(5);
          }else{
            $('.' + opts.activeClass).removeClass(opts.activeClass).parent().prev().find('a').addClass(opts.activeClass);
            fpageNext(l-1);
          }
        })

        obj.on('click', 'li', function(){
          var $this = $(this);
          var pageshow = $this.find('a').html();
          if(l>6){
            if(pageshow > l-5&&pageshow < l+1){
              $('.' + opts.activeClass).removeClass(opts.activeClass);
              $this.find('a').addClass(opts.activeClass);
              fpageNext(5-(l-pageshow));
            }else if(pageshow > 0&&pageshow < 4){
              $('.' + opts.activeClass).removeClass(opts.activeClass);
              $this.find('a').addClass(opts.activeClass);
              fpagePrv(pageshow-1);
            }else{
              $('.' + opts.activeClass).removeClass(opts.activeClass);
              $this.find('a').addClass(opts.activeClass);
              fpageShow();
            }
          }else{
            $('.' + opts.activeClass).removeClass(opts.activeClass);
            $this.find('a').addClass(opts.activeClass);
          }
        })

        function fpageShow(){
          var pageshow = parseInt($('.' + opts.activeClass).html());
          var pageStart = pageshow - 3;
          var pageEnd = pageshow + 3;
          var str1 = '';
          for(i=0;i<6;i++){
            str1 += '<li><a href="javascript:" class="">' + (pageStart+i) + '</a></li>'
          }
          obj.find('ul').html(str1);
          obj.find('ul li').eq(3).find('a').addClass(opts.activeClass);
        }

        function fpagePrv(prv){
          var str1 = '';
          if(l>5){
            for(i=0;i<6;i++){
              str1 += '<li><a href="javascript:" class="">' + (i+1) + '</a></li>'
            }
          }else{
            for(i=0;i<l;i++){
              str1 += '<li><a href="javascript:" class="">' + (i+1) + '</a></li>'
            }
          }
          obj.find('ul').html(str1);
          obj.find('ul li').eq(prv).find('a').addClass(opts.activeClass);
        }

        function fpageNext(nxt){
          var str1 = '';
          if(l>5){
            for(i=l-5;i<l+1;i++){
              str1 += '<li><a href="javascript:" class="">' + i + '</a></li>'
            }
           obj.find('ul').html(str1);
           obj.find('ul li').eq(nxt).find('a').addClass(opts.activeClass);
          }else{
            for(i=0;i<l;i++){
              str1 += '<li><a href="javascript:" class="">' + (i+1) + '</a></li>'
            }
           obj.find('ul').html(str1);
           obj.find('ul li').eq(nxt).find('a').addClass(opts.activeClass);
          }
        }
      });
    }
  })
})(jQuery);
$(function(){
  $('.page-main').page({
    leng: 40,//分页总数
    activeClass: 'activP' , //active 类样式定义
  })
});