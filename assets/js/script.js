// alert('이 홈페이지는 포트폴리오 용도로 제작되었습니다.');

$(function(){
    // menu
    $('.trans-top').on('click', function(){
        $('.trans-down-list').stop().slideToggle();
    });

    let menuScroll = 750;
    $(Window).scroll(function(){
        let num = $(window).scrollTop();

        if(num > menuScroll){
            $('.header').css("background-color", "#1b1f338c")
        } else {
            $('.header').css("background-color", "")
        }
    })

    // mo-menu
    $('.menu-btn').on('click', function(){
        $('.mo-nav').addClass('is-open')
    });
    $('.close-btn').on('click', function(){
        $('.mo-nav').removeClass('is-open')
    });
})


// game-slide
var gameSwiper = new Swiper(".game-swiper", {
      slidesPerView: 1,
      spaceBetween: 80,
      loop: true,
      centeredSlides: true,

      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      breakpoints: {
        1025: {
          slidesPerView: 1.3,
          spaceBetween: 80,
        },
      },
});

window.addEventListener("load", function () {
      gameSwiper.update();
    });

// news slide
 var newsSwiper = new Swiper(".news-swiper", {
       slidesPerView: 1.2,
       spaceBetween: 20,
       loop: true,
       speed: 5000,
       allowTouchMove: false,
       breakpoints: {
        767: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        on: {
            setTransition: function (newsSwiper, transition) {
                let window_w = window.innerWidth;
                if(transition == 5000) {
                    if(window_w <= 1024) newsSwiper.wrapperEl.style.transitionDuration = '5000ms';
                    if(window_w <= 767) newsSwiper.wrapperEl.style.transitionDuration = '4000ms';
                }
            },
        },
    });

    let x;
    newsSwiper.el.addEventListener('mouseenter', function() {
        x = newsSwiper.slidesEl.style.transform;
        newsSwiper.slidesEl.style.transform = 'translate3d('+newsSwiper.slidesEl.getBoundingClientRect().left+'px, 0px, 0px)';
        newsSwiper.autoplay.stop();
        return false;
    });
    newsSwiper.el.addEventListener('mouseleave', function() {
        newsSwiper.slidesEl.style.transform = x;
        newsSwiper.autoplay.start();
        return false;
    });