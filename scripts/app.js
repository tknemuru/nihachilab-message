$(function () {
    $('a[href^=#]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    $('.sp-menu').click(
        function () {
            $('.sp-menu-first').slideToggle(200);
            $('.sp-menu-second').slideToggle(200);
            $('.social-link-container').slideToggle(200);
        }
    );

    // コンテンツを英語に切り替えます。
    var toggleToEn = function () {
        $('.content-en').show();
        $('.content-ja').hide();
        $('#toggle-en').hide();
        $('#toggle-ja').show();
    };

    // コンテンツを日本語に切り替えます。
    var toggleToJa = function () {
        $('.content-en').hide();
        $('.content-ja').show();
        $('#toggle-en').show();
        $('#toggle-ja').hide();
    };

    $('#toggle-en').click(function () {
        toggleToEn();
    });

    $('#toggle-ja').click(function () {
        toggleToJa();
    });

    // on load
    toggleToJa();
});