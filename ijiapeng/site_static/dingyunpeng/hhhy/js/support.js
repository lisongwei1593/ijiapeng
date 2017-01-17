var content0 = "<div>" +
    "<h4 class='main-title'>咨询服务</h4>" +
    "<div class='img-box'><img src='images/s4.jpg'/></div>" +
    "<p>红海华谊提供关于软件研发相关的咨询服务，包括但不限于PC端平台建设、移动端应用开发；电商平台建设，VR相关软件技术研发，红海华谊愿意为您解答关于软件的各种相关问题。</p>" +
    "<p>多渠道互动：您可以通过电话、邮件、网站、传真等多种方式与我们沟通交流，使您的问题、建议反馈更通畅、快捷。</p>"+
    "<p>一站式服务：当您有任何软件咨询的问题时，只需致电我们，其它一切事务由我们专业服务团队解决。</p>" +
    "<p>快速解决用户问题：技术服务中心拥有丰富的产品支持知识库和强大的专家团队，保障了您的问题能在最短的时间得到有效地解决。</p>"+
    "<div class='contact'>联系电话：010-56284066</div>" +
    "<div class='contact'>电子邮箱：hi@hiinvr.com</div>" +
    "<div class='contact'>公司网站：www.hiinvr.com</div>" +
    "</div>";
var content1 = "<div>" +
    "<h4 class='main-title'>VR开发</h4>" +
    "<div class='img-box'><img src='images/s3.png'/><div class='ab-pic develop'></div></div>" +
    "<p>红海华谊于15年底战略布局VR领域，组建专业团队探索VR相关技术研究。现在团队已经结合旅游、工业仿真、游戏行业有完成的作品，欢迎有合作意向的伙伴致电咨询。红海华谊同步打造自产有品云朵VR，欲搭建VR内容大平台，提供PC端以及移动端的产品。未来红海华谊会更加专注于VR领域的技术研究，为各行业提供技术解决方案。</p>" +
    "</div>";
var content2 = "<div>" +
    "<h4 class='main-title' style='margin-bottom: 0'>VR内容定制</h4>" +
    "<div class='main-bdr'></div>"+
    "<p>VR（虚拟现实）有潜力成为下一个重要计算平台，如同PC和智能手机，新的市场终将形成，而当前的许多市场将被颠覆。通过VR重塑当前行为方式的案例不在少数，如买房、与医生互动和观看足球比赛等。但随着技术的改进和价格的下滑，以及相关应用(无论是面向企业，还是个人消费者)的诞生，VR的市场规模将达到数百亿美元，并有可能像PC的出现一样成为游戏规则的颠覆者。</p>" +
    "<p>红海华谊相信VR内容的定制会是一个大机会，我们搭建了自有内容平台—云朵VR，提供ios／android 版本，欢迎下载试用。</p>" +
    "<p>如果您的企业需要VR内容定制或者VR技术配合，联系我们，选择我们。</p>" +
    "<div class='img-box'><img src='images/s1.png'/></div>" +
    "</div>";
var content3 = "<div>" +
    "<h4 class='main-title'>软件外包</h4>" +
    "<div class='img-box'><img src='images/s2.jpg'/></div>" +
    "<p>红海华谊成立之初的主要业务就是软件外包，红海华谊在项目管理各个阶段很有经验。有自己的项目流程方法，敏捷的开发模式能够快速响应客户的需求。高质量、高效率的完成工作。同时，红海华谊的队伍学习能力高，从一般的网站搭建到电商平台再到交易平台的设计，红海华谊技术一步一步的积累。</p>" +
    "<p>我们的队伍每个人都有自己擅长的方向，当您的项目交给我们方方面面都有人替您把关。</p>" +
    "</div>";
$(function(){
    var hash = location.hash;
    var publicRight = $(".public-right");
    var publicLeft = $(".public-left");
    var changeContentByHash = function(hash){
        if(hash == '#consulting'){
            publicRight.html(content0);
            publicLeft.find("li").eq(0).addClass("active").siblings().removeClass("active");
        }else if(hash == '#development'){
            publicRight.html(content1);
            publicLeft.find("li").eq(1).addClass("active").siblings().removeClass("active");
        }else if(hash == '#Content'){
            publicRight.html(content2);
            publicLeft.find("li").eq(2).addClass("active").siblings().removeClass("active");
        }else if(hash == '#Software_out'){
            publicRight.html(content3);
            publicLeft.find("li").eq(3).addClass("active").siblings().removeClass("active");
        }else{
            publicRight.html(content0);
            publicLeft.find("li").eq(0).addClass("active").siblings().removeClass("active");
        }
    };
    changeContentByHash(hash);
    window.onhashchange = function(){
        var hash = location.hash;
        changeContentByHash(hash);
    };
    $(".main-nav>li>a").hover(function(){
        $(this).parent().addClass("hover").siblings().removeClass("hover");
    },function(){
        $(this).parent().removeClass("hover");
    }).click(function(){
        publicRight.css('opacity','0');
        $(this).parent().addClass("active").siblings().removeClass("active");
        $(window).scrollTop(0);
        var index = $(this).parent().index();
        if(index == 0){
            publicRight.html(content0);
        }else if(index == 1){
            publicRight.html(content1);
        }else if(index == 2){
            publicRight.html(content2);
        }else if(index == 3){
            publicRight.html(content3);
        }
        publicRight.stop(true).animate({'opacity': 1},800);
    });
});
