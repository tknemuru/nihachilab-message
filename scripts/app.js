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
});