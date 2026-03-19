// alert ('해당 페이지는 포트폴리오 용도로 만들어졌습니다.')

$(function(){
    // 카테고리 탭
    $('.kategorie-list li').on('click', function(){
        $('.kategorie-list li').removeClass('tab-on');
        $(this).addClass('tab-on');

        let type = $(this).data('type');

        if(type === 'all'){
            $('.news-list li').not('.event').show();
        } else {
            $('.news-list li').not('.event').hide();
            $('.news-list li.' + type).show();
        }

        let visibleCount = $('.news-list li:visible').not('.event').length;

        if(visibleCount === 0){
            $('.event').show();
            $('.news-more-btn').hide();
        } else {
            $('.event').hide();
            $('.news-more-btn').show();
        }

        if(visibleCount <= 4){
            $('.news-more-btn').hide();
        } else {
            $('.news-more-btn').show();
        }
    })

    let dateA = new Date($(a).find('.date').data('date'));
})