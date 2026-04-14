$(function(){
    // menu
    $('.trans-top').on('click', function(){
        $('.trans-down-list').stop().slideToggle();
    });

    let menuScroll = 750;
    $(window).scroll(function(){
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