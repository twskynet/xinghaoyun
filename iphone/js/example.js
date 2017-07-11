$(function() {

    var elem = {
        already: $('.already'),
        release: $('.release'),
        page_list: $('.x-main .x-content > div')
    }

    function main() {
        top_switch();
    }

    function top_switch() {
        $('.x-top li').click(function() {
            $('.x-top li').removeClass('x-active');
            $(this).addClass('x-active');
            var page = $(this).attr('data-page');
            if($('.'+page).is(':hidden')) {
                elem.page_list.hide();
                $('.'+page).show();
            }
        });
    }

    main();
});
