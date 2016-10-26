$(function(){
    function game(){
        var windowW = $(window).width();
        if(windowW>=1200){
            var offsetRightVal = (windowW - 1200)/2;
            $("#game").css("right",-offsetRightVal + "px");
            $("body").css("overflow-x","hidden");
        }
    }
    game();
    $(window).resize(function(){
        game();
    });
    var topHeight = $(".top").height();
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        function getOffsetValue(scrollTop,id){
            this.sOneoffsetTop = $(id).offset().top;
            this.sOneOffsetValue = (this.sOneoffsetTop - scrollTop)/8;
            $(id).css("background-position","50% " + this.sOneOffsetValue + 'px');
        }
        var sectionOne = new getOffsetValue(scrollTop,'#sectionOne');
        var sectionTwo = new getOffsetValue(scrollTop,'#sectionTwo');
        var sectionThree = new getOffsetValue(scrollTop,'#sectionThree');
        var sectionFour = new getOffsetValue(scrollTop,'#sectionFour');
        var sectionFive = new getOffsetValue(scrollTop,'#sectionFive');
    });
    //stars
    (function(){
//        if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

        var container, stats;
        var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color, size;
        var mouseX = 0, mouseY = 0;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        init();
        animate();

        function init() {

            container = document.getElementById("stars" );

            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
            camera.position.z = 2000;

            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2( 0xffffff, 0.00007 );

            geometry = new THREE.Geometry();

            for ( i = 0; i < 400; i ++ ) {

                var vertex = new THREE.Vector3();
                vertex.x = Math.random() * 6000 - 1000;
                vertex.y = Math.random() *6000 - 1000;
                vertex.z = Math.random() * 6000 - 1000;

                geometry.vertices.push( vertex );

            }

            parameters = [
                [ [1, 1, 1], 5 ],
                [ [1, 1, 1], 4 ],
                [ [1, 1, 1], 3 ],
                [ [0, 1, 0], 2 ],
                [ [1, 1,0], 1 ]
            ];

            for ( i = 0; i < parameters.length; i ++ ) {

                color = parameters[i][0];
                size  = parameters[i][1];

                materials[i] = new THREE.PointCloudMaterial( { size: size } );

                particles = new THREE.PointCloud( geometry, materials[i] );

                particles.rotation.x = Math.random() * 6;
                particles.rotation.y = Math.random() * 6;
                particles.rotation.z = Math.random() * 6;

                scene.add( particles );

            }

            renderer = new THREE.WebGLRenderer({alpha:true});
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight*0.8 );
            container.appendChild( renderer.domElement );

            document.getElementById('stars').addEventListener( 'mousemove', onDocumentMouseMove, false );
            document.getElementById('stars').addEventListener( 'touchstart', onDocumentTouchStart, false );
            document.getElementById('stars').addEventListener( 'touchmove', onDocumentTouchMove, false );

            //

            window.addEventListener( 'resize', onWindowResize, false );

        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function onDocumentMouseMove( event ) {

            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;

        }

        function onDocumentTouchStart( event ) {

            if ( event.touches.length === 1 ) {

                event.preventDefault();

                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;

            }

        }

        function onDocumentTouchMove( event ) {

            if ( event.touches.length === 1 ) {

                event.preventDefault();

                mouseX = event.touches[ 0 ].pageX - windowHalfX;
                mouseY = event.touches[ 0 ].pageY - windowHalfY;

            }

        }

        //

        function animate() {

            requestAnimationFrame( animate );

            render();


        }

        function render() {

            var time = Date.now() * 0.00005;

            camera.position.x += ( mouseX - camera.position.x ) * 0.05;
            camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

            camera.lookAt( scene.position );

            for ( i = 0; i < scene.children.length; i ++ ) {

                var object = scene.children[ i ];

                if ( object instanceof THREE.PointCloud ) {

                    object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );

                }

            }

            for ( i = 0; i < materials.length; i ++ ) {

                color = parameters[i][0];

                h = ( 360 * ( color[0] + time ) % 360 ) / 360;
                materials[i].color.setHSL( h, color[1], color[2] );

            }

            renderer.render( scene, camera );

        }

    })();
    //banner
    var bannerSlider = new Slider($('#banner_tabs'), {
        time: 5000,
        delay: 400,
        event: 'hover',
        auto: true,
        mode: 'fade',
        controller: $('#bannerCtrl'),
        pauseOnHover: 'false',
        activeControllerCls: 'active'
    });
    //服务
    $('.service-list').find('.service-icon:gt(2)').css({'border-bottom':'none'});
    $(".service-list .service-icon").filter(function(inx){
        if(inx%3===2){
            $(this).css({'border-right':'none'});
        }
    });
    //技术核心
    function randomMove(parame) {
        //console.log(parame.showText);
        var timeout = false;
        var vertical = parame.vertical;
        var horizontal = parame.horizontal;
        var time = parame.time;
        var obj = $(parame.obj);
        $(parame.hide).stop(true);
        var hideTop = $(parame.hide).css("top");
        $(parame.showObj).stop(true);
        var showObjtop = $(parame.showObj).css("top");
        var timer = function () {
            if(timeout) return;
            var randomNoOne = Math.random();
            var randomNoTwo = Math.random();
            var count = randomNoOne + randomNoTwo;
            var plusMinus = Math.random() > 0.5 ? 1 : -1;
            var easing = count > 1.5 ? "easeInCubic" : count > 1 ? "easeOutExpo" : count > 0.5 ? "easeInOutQuad" : "easeInQuad";
            obj.animate({
                'top': randomNoOne * vertical * plusMinus + 'px',
                'left': randomNoTwo * horizontal * plusMinus + 'px'
            },{
                duration: time,
                easing: easing
            });
            setTimeout(timer,time)
        };
        obj.mouseover(function(){
            $(parame.showObj).empty().text(parame.showText);
            timeout = true;
            obj.stop(true);
            if(parame.paused){
                $(parame.paused).addClass("paused");
            }
            if(parame.hide){
                $(parame.hide).animate({
                    'top': parseInt(hideTop) + 40 + 'px',
                    'opacity' : 0
                },450)
            }
            if(parame.showObj){
                $(parame.showObj).animate({
                    'top': parseInt(showObjtop) - 95 + 'px',
                    'opacity' : 1
                },600)
            }
        });
        obj.mouseleave(function(){
            timeout = false;
            if(parame.paused){
                $(parame.paused).removeClass("paused");
            }
            $(parame.hide).stop(true);
            $(parame.hide).animate({
                'top': parseInt(hideTop) + 'px',
                'opacity' : 1
            },450);
            $(parame.showObj).stop(true);
            if(parame.showObj){
                $(parame.showObj).animate({
                    'top': showObjtop,
                    'opacity' : 0
                },600)
            }
            timer();
        });
        timer();
    }
    var parameOne = {
        time: 2000,
        obj: "#core-image",
        vertical: 100,
        horizontal: 40,
        hide: '#coreImg',
        showObj: '#coreText',
        showText: '配合眼睛需要，通过专业的合成软件制作图像',
        paused: '#sawtooth'
    };
    var parameTwo = {
        time: 2200,
        obj: "#core-voice",
        vertical: 120,
        horizontal: 50,
        hide: '#coreImg',
        showObj: '#coreText',
        showText: '合成不同位置录制的不同声音，增强沉浸感',
        paused: '#sawtooth'
    };
    var parameThree = {
        time: 1500,
        obj: "#core-bodyfeel",
        vertical: 80,
        horizontal: 60,
        hide: '#coreImg',
        showObj: '#coreText',
        showText: '振动的触点来模拟触觉，通过软件虚拟的合成体感',
        paused: '#sawtooth'
    };
    var parameFour = {
        time: 1800,
        obj: "#core-interaction",
        vertical: 90,
        horizontal: 80,
        hide: '#coreImg',
        showObj: '#coreText',
        showText: '虚拟环境与人实时交互，定制不同场景的互动',
        paused: '#sawtooth'
    };
    var core1 = new randomMove(parameOne);
    var core2 = new randomMove(parameTwo);
    var core3 = new randomMove(parameThree);
    var core4 = new randomMove(parameFour);
});
