$(function() {

    var elem = {
        already: $('.already'),
        release: $('.release'),
        page_list: $('.x-main .x-content > div'),
        screen_btn: $('.screen-btn'),
        more: $('.x-main .x-content .more'),
        list_content: $('.x-content')
    }

    function main() {
        my_event();
    }

    function my_event() {
        bt_switch();
        content_switch();
        more_seitch();
        var rece = $('.rece-list');
        var cons = $('.cons-list');
        Common_user(rece, 'rece-in', 'rece-intpl');
        Common_user(cons, 'cons-in', 'cons-intpl');
    }

    function bt_switch() {
        $('.tag-list li').click(function() {
            if ($(this).find('.arrow-up').is(':hidden')) {
                $(this).find('.arrow-up').show();
                $(this).find('.arrow-down').hide();
            } else {
                $(this).find('.arrow-up').hide();
                $(this).find('.arrow-down').show();
            }
        });
    }

    function content_switch() {
        elem.screen_btn.click(function() {
            if ($('.screen').is(':hidden')) {
                $('.screen').show();
                $('.x-first').hide();
            } else {
                $('.screen').hide();
                $('.x-first').show();
            }
        });
    }

    function more_seitch() {
        elem.more.hide();
        elem.list_content.click(function() {
            if (elem.more.is(':hidden')) {
                elem.more.show();
            } else {
                elem.more.hide();
            }
        });
    }

    function Common_user(elemen, input, intpl) {
        elemen.click(function() {
            var username = $(this).find('.user').text().trim();
            var usertpl = $(this).find('.tpl').text().trim();
            var $_in = $('.' + input);
            var $_intpl = $('.' + intpl);
            $_in.val(username);
            $_intpl.val(usertpl);
        });
    }
    main();
});
