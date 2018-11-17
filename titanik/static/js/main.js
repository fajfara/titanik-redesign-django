$(document).ready(function() {
    "use strict";


    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;

    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);



    //------- Niceselect  js --------//  

    if (document.getElementById("default-select")) {
        $('select').niceSelect();
    };
    if (document.getElementById("default-select2")) {
        $('select').niceSelect();
    };
    if (document.getElementById("service-select")) {
        $('select').niceSelect();
    };    

    //------- Lightbox  js --------//  

    $('.img-gal').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //------- Superfish nav menu  js --------//  

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });


    //------- Filter  js --------//  
    

    var d = new Date();
    d = d.getDay();
    console.log(d);
    if(d == 1){
        $('#ponedeljek').addClass('active');

        var data = $('#ponedeljek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    } else if (d == 2){
        $('#torek').addClass('active');

        var data = $('#torek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    } else if (d == 3){
        $('#sreda').addClass('active');

        var data = $('#sreda').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    } else if (d == 4){
        $('#cetrtek').addClass('active');

        var data = $('#cetrtek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    }  else if (d == 5){
        $('#petek').addClass('active');

        var data = $('#cetrtek').attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
    }

      $('.filters li').click(function(){
        $('.filters li').removeClass('active');
        $(this).addClass('active');
        
        var data = $(this).attr('data-filter');
        $('.grid').isotope({
          filter: data
        })
      });

      $('.filters li').click(function(){
        let pageLocation = window.location.pathname;
        console.log(pageLocation);
        if(pageLocation.includes("/jedilnik")){
            console.log("testing active jedilnik");
            $('.filters li').removeClass('active-menu-filter');
            $(this).addClass('active-menu-filter');
            
            var data = $(this).attr('data-filter');
            $('.grid').isotope({
            filter: data
            });
        }; 
      });



      if(document.getElementById("food") || document.getElementById("gallery")){
            var $grid = $(".grid").isotope({
              itemSelector: ".all",
              percentPosition: true,
              masonry: {
                columnWidth: ".all",
                gutter: 0
              }
            })
      };

    //------- Owl Carusel  js --------//  

    $('.-review-carusel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayHoverPause: true,        
        smartSpeed:500,          
        margin:30,
        dots: true
    });
    //------- Mobile nav functionality -------//
    let burgerBtn = document.getElementById('mobilenav-burger-btn');
    let mobile = document.getElementsByTagName("BODY")[0];
    let burgerBtnPressed = false;
    burgerBtn.addEventListener('click', function() {
        mobile.classList.toggle('navigation');
        burgerBtnPressed = !burgerBtnPressed;
        console.log(burgerBtnPressed);
    }, false);
    

    



    //------- Header Scroll Class  js --------//  

    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            setTimeout(() => {
                if($(this).scrollTop() > 101){
                    $('.header-top').addClass('remove');
                };
            }, 250);
        } else if ($(this).scrollTop() > 100 || burgerBtnPressed){
            $('#header').addClass('header-scrolled');
            setTimeout(() => {
                if($(this).scrollTop() > 101){
                    $('.header-top').addClass('remove');
                };
            }, 250);
        } else {
            $('#header').removeClass('header-scrolled');
            $('.header-top').removeClass('remove');
        }

    });


    //------- Parallax scroll --------//

    window.addEventListener('scroll', () => {
        let pageLocation = window.location.pathname;
        if(pageLocation.includes("index.html") || pageLocation == '/' || pageLocation == '/Titanik-Nova/'){
            let parent = document.getElementById('parallax-container');
            let children = parent.getElementsByTagName('div');
            let aboutPage = document.getElementById('about-area');
                for(let i = 0; i < children.length; i++) {
                    children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
                }
                aboutPage.style.transform = 'translateY(-' + (window.pageYOffset * .9) + 'px)';
        }
    }, false);

    //------ Parallax js fixing -------//
    let calcPos = (w) => {
        return w / 200;
    }
    let adjustTopWoodCounter = (w,wood) => {
        if(w > 2400){
            wood.style = "top: " + (calcPos(w) * (-1) - 15) + "rem;";
        }
        else if(w > 2000){
            wood.style = "top: " + (calcPos(w) * (-1) - 8) + "rem;";
        }
        else if(w > 1300){
            wood.style = "top: " + (calcPos(w) * (-1) + 5) + "rem;";
        }
        else {
            wood.style = "top: " + calcPos(w) + "rem;";
        }
    };

    window.onload = () => {
        let width = document.body.clientWidth;
        let woodCounter = document.getElementById("wood-counter");
        adjustTopWoodCounter(width, woodCounter);
        
        window.addEventListener('resize', () => {
            let width = document.body.clientWidth;
            adjustTopWoodCounter(width, woodCounter);
            
        });

    }

    

    

    //------- Mailchimp js --------//  

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });

});

//------- custom js --------//

//------- Google Map  js --------//  

function initMap(){
    var options = {
        zoom: 18,
        center: {
            lat: 46.256545, 
            lng: 14.382235
        }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
}