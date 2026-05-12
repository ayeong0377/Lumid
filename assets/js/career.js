$(function(){
    $('.more-btn').on('click', function(){
        const $btn = $(this)

        if($btn.hasClass('active')){
            $('.mo-hide').fadeOut();

            $btn.removeClass('active');
            $btn.find('span').text('더보기');
        } else {
            $('.mo-hide').fadeIn();

            $btn.addClass('active');
            $btn.find('span').text('접기');
        }
    })
})