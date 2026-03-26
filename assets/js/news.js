// alert ('해당 페이지는 포트폴리오 용도로 만들어졌습니다.')

$(function(){

    let visibleCount = 5;
    let currentCategory = 'all';
    let currentSort = 'latest'; // latest | old

    // =========================
    // 렌더 함수 (핵심)
    // =========================
    function updateList(){

        let items = $('.news-list li').not('.no-data');

        // 1. 전체 숨김
        items.hide();

        // 2. 카테고리 필터
        let filtered;

        if(currentCategory && currentCategory !== 'all'){
            filtered = items.filter('.' + currentCategory);
        } else {
            filtered = items;
        }

        // 3. 정렬
        let sorted = filtered.get().sort(function(a, b){

            let dateA = new Date($(a).find('.date').attr('data-date'));
            let dateB = new Date($(b).find('.date').attr('data-date'));

            return currentSort === 'latest'
                ? dateB - dateA
                : dateA - dateB;
        });

        // DOM 재정렬
        $.each(sorted, function(i, el){
            $('.news-list').append(el);
        });

        // 4. 더보기 적용
        $.each(sorted.slice(0, visibleCount), function(i, el){
            $(el).show();
        });

        // 5. 데이터 없음 처리
        if(filtered.length === 0){
            $('.no-data').show(); // no-data
            $('.news-more-btn').hide();
        } else {
            $('.no-data').hide();

            // 더보기 버튼
            if(visibleCount >= filtered.length){
                $('.news-more-btn').hide();
            } else {
                $('.news-more-btn').show();
            }
        }
    }

    // =========================
    // 카테고리 탭
    // =========================
    $('.kategorie-list li').on('click', function(){

        $('.kategorie-list li').removeClass('tab-on');
        $(this).addClass('tab-on');

        currentCategory = $(this).data('type');
        visibleCount = 5; // 초기화

        updateList();
    });

    // =========================
    // 정렬 탭
    // =========================
    $('.time-tab-list li').on('click', function(){

        $('.time-tab-list li').removeClass('time-on');
        $(this).addClass('time-on');

        currentSort = $(this).text().trim() === '최신순' ? 'latest' : 'old';

        updateList();
    });

    // =========================
    // 더보기 버튼
    // =========================
    $('.news-more-btn').on('click', function(){
        visibleCount += 5;
        updateList();
    });

    // =========================
    // 최초 실행
    // =========================
    updateList();


});


