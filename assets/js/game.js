$(function(){
    const itemsPerPage = 3;

    let currentFilter = 'all';
    let visibleCount = itemsPerPage;

    // 콘텐츠표시
    function renderGames() {
        const $allGames = $('.game-list > li');

        // 탭에 해당하는 항목 선택
        let $filteredGames;

        if(currentFilter === 'all') {
            $filteredGames = $allGames;
        } else {
            $filteredGames = $allGames.filter('.' + currentFilter);
        }

        // 모든 게임 숨기기
        $allGames.hide();

        // 지정개수만 표시
        $filteredGames.slice(0, visibleCount).show();

        // 전체 게임 수
        const totalCount = $filteredGames.length;

        // 게임이 있는지 없는지 확인
        if (totalCount === 0) {
            $('.no-result-wrap').show();
        } else {
            $('.no-result-wrap').hide();
        }

        // 더보기 표시
        if (totalCount > visibleCount) {
            $('.game-more-wrap').show();
        } else {
            $('.game-more-wrap').hide();
        }

        AOS.refresh();
    }

    // game-tab
    $('.game-tab li').on('click', function(e){
        e.preventDefault();

        // 필터값 가져오기
        currentFilter = $(this).find('a').data('filter');

        // 탭 변경 시 처음부터 3개 표시
        visibleCount = itemsPerPage;

        // 탭 변경
        $('.game-tab li').removeClass('game-on')
        $(this).addClass('game-on')

        renderGames();
    });

    // 더보기 클릭
    $('.game-more-wrap button').on('click', function(e){
       e.preventDefault();

        visibleCount += itemsPerPage;

        renderGames();
    })

    // 최초실행
    renderGames();

    // no-notice
    $('.game-more').on('click', function(){
        $('.no-notice').show();
    })

    $('.no-notice-close').on('click', function(){
        $('.no-notice').hide();
    })
})