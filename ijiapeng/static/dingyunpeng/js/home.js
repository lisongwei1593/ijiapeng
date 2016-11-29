$(function(){
  var $home = $('#page-home'),
      $box = $('.experience .box');

  //背景图移动
  $('.page-title').backgroundEffect({
    cv : 0.1,   //速度
    max : 40    //最多移动多少
  });
  $('.page-decorate').backgroundEffect({
    cv : 0.15,
    max : 60
  });  
  $('.page-line').backgroundEffect({
    cv : 0.2,   //速度
    max : 80    //最多移动多少
  });  

  //轮播
  $box.slide({
    conbox: $(".panes", $box),
    act: "hover",
    auto : 3000,   //自动轮播时间间隔
    contag: $(".panes>div", $box)
  });

  $('body,html').animate({scrollTop:0},500);

  $(window).on('resize', function(){
    $home.height( $(window).height() );
  }).trigger('resize');

  var $iconsMouse = $('.icons-mouse');
  $iconsMouse.on('click', function(){
    $('body,html').animate({scrollTop: $('.main').height()+'px'},500);
  });

  var scrollFlag = false;
  $(window).on('scroll', function(){
    var scrollTop = $(this).scrollTop();
    if( scrollTop>20 && scrollFlag === false ){
      scrollFlag = true;
      $iconsMouse.css('animation-play-state', 'paused').animate({
        opacity: 0
      });
    }else if(scrollTop<=20 && scrollFlag === true){
      scrollFlag = false;
      $iconsMouse.css('animation-play-state', 'running').animate({
        opacity: 1
      });
    }
  });

});

$.fn.animateZepTo = function(properties, duration, ease, callback){
  if (duration) duration = duration / 1000
  var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
  var prefix, eventPrefix, clearProperties = {}, testEl = document.createElement('div');
  $.each({ Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' }, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  });
  clearProperties[prefix + 'transition-property'] =
  clearProperties[prefix + 'transition-duration'] =
  clearProperties[prefix + 'transition-timing-function'] =
  clearProperties[prefix + 'animation-name'] =
  clearProperties[prefix + 'animation-duration'] = '';
  var transforms, cssProperties = {}, key, that = $(this), wrappedCallback, 
      endEvent = eventPrefix ? eventPrefix + 'TransitionEnd' : 'TransitionEnd'.toLowerCase();
  if (duration === undefined) duration = 0.4
  for (key in properties)
    if (supportedTransforms.test(key)) {
      transforms || (transforms = [])
      transforms.push(key + '(' + properties[key] + ')')
    }
    else cssProperties[key] = properties[key]
  if (transforms) cssProperties[prefix + 'transform'] = transforms.join(' ');
  if (typeof properties === 'object') {
    cssProperties[prefix + 'transition-property'] = Object.keys(properties).join(', ');
    cssProperties[prefix + 'transition-duration'] = duration + 's';
    cssProperties[prefix + 'transition-timing-function'] = (ease || 'linear');
  }
  wrappedCallback = function(event){
    if (typeof event !== 'undefined') {
      if (event.target !== event.currentTarget) return
      $(event.target).unbind(endEvent, arguments.callee);
    };
    $(this).css(clearProperties);
    callback && callback.call(this);
  }
  if (duration > 0) $(this).bind(endEvent, wrappedCallback)
  setTimeout(function() {
    that.css(cssProperties)
    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) });
    }, 0);
  }, 0);
  return this;
}

$.fn.backgroundEffect = function( options ){
  var window_width,
      window_height,
      _default = {
        cv : 0.2,   //速度
        max_x : 40,   //最多移动多少
        max_y : 20
      }
  options = $.extend(_default, options||{});
  return this.each(function(){
    var that = $(this);
    $(window).on('resize', function(){
      window_width = $(window).width();
      window_height = $(window).height();
    }).trigger('resize');
    $(document).on('mousemove', function(e){
      var _x = (e.pageX - window_width / 2) * options.cv,
          _y = (e.pageY - window_height / 2) * options.cv;
      if(Math.abs(_x) > options.max_x) _x = _x > 0 ? options.max_x : -options.max_x; 
      if(Math.abs(_y) > options.max_y) _y = _y > 0 ? options.max_y : -options.max_y; 
      that.animateZepTo({
        'transform': 'translate3d('+_x+'px, '+_y+'px, 0px)'
      }, 200, 'ease-out');
    });
  });
};
