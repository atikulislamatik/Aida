(function($) {
    //preloader start

       // preloader

        $(window).load(function() {
            $("#loading").fadeOut(1200);

        })

        // 
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 400) {
            $("header").addClass("black");
        }
        else {
            $("header").removeClass("black");
        }
    }
    );


    // water ripples
    var $home=$('.single-slide');
    $home.ripples( {
        resolution: 512, dropRadius: 20, perturbance: 0.01,
    }
    );
    // wow js
    new WOW( {
        offset: 100, mobile: true
    }
    ).init();
    // barfiller
    $(document).ready(function() {
        $('#bar1').barfiller( {
            barColor: 'rgba(250, 255, 0, 0.7)'
        }
        );
        $('#bar5').barfiller( {
            barColor: 'rgba(250, 255, 0, 0.7)'
        }
        );
        $('#bar2').barfiller( {
            barColor: 'rgba(250, 255, 0, 0.7)'
        }
        );
        $('#bar3').barfiller( {
            barColor: 'rgba(250, 255, 0, 0.7)'
        }
        );
        $('#bar4').barfiller( {
            barColor: 'rgba(250, 255, 0, 0.7)'
        }
        );
        $('#bar7').barfiller( {
            barColor: 'rgba(250, 255, 0, 0.7)'
        }
        );
        $('#bar8').barfiller( {
            barColor: 'rgba(250, 255, 0, 0.7)'
        }
        );
        $('#bar6').barfiller( {
            barColor: 'rgba(250, 255, 0, 0.7)'
        }
        );
    }
    );
    jQuery(document).ready(function($) {
        $('.counter').counterUp( {
            delay: 10, time: 1000
        }
        );
    }
    );
    //client slider
    $(".client-slider").owlCarousel( {
        items: 2, loop: true, autoplay: false, autoplayTimeout: 6000, smartSpeed: 2000, autoplayHoverPause: true, nav: false, margin:20, dots:true, responsiveClass: true, responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 1
            }
            , 769: {
                items: 2
            }
        }
    }
    );
    //project magnific
    $('.foot-gall-pop').magnificPopup( {
        type: 'image', removalDelay: 300, gallery: {
            // options for gallery
            enabled: true
        }
        ,
    }
    );
    // video popup
    $('.video-pop').magnificPopup( {
        type: 'iframe'
    }
    );
    // preloader
    $(window).load(function() {
        $("#loading").fadeOut(1200);
    }
    ) // scroll top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').fadeIn();
        }
        else {
            $('.scroll-top').fadeOut();
        }
    }
    );
    $('.scroll-top').click(function() {
        $('html, body').animate( {
            scrollTop: 0
        }
        , 800);
        return false;
    }
    );
    // scroll down
    $('.scroll-down').click(function() {
        $('#about-section').animate( {}
        , 800);
    }
    );
    // //slicknav js
    $(document).ready(function() {
        $('#hello').slicknav({
             'label': '',
            brand: ' <a href="#"><img src="assets/images/logo.png" alt=""></a>'

        });

    });


    $('.foot-gall-pop').magnificPopup( {
        type: 'image', removalDelay: 300, gallery: {
            // options for gallery
            enabled: true
        }
        ,
    }
    );
    $('.portfolio-list').isotope( {
        itemSelector: '.item'
    }
    );
    $('.all-portfolio li').click(function() {
        $('.all-portfolio li').removeClass('active-portfolio');
        $(this).addClass('active-portfolio');
        var selector=$(this).attr('data-filter');
        $('.portfolio-list').isotope( {
            filter: selector
        }
        );
        return false;
    }
    );
    /* One Page Nav */
    $('.main-menu ul').onePageNav( {
        currentClass: 'current', changeHash: true, scrollSpeed: 750, scrollThreshold: 0.2, easing: 'swing', scrollOffset: 20
    }
    );
}

(jQuery));