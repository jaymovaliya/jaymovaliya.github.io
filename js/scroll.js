$(document).ready(function () {
    $("nav").click(function (e) {
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    })
})