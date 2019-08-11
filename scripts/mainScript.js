// BUTTON IN MAIN HEADER CLICK EVENT

$("header.mainHeader div.circle").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 500)
});


// ELEMENTS ANIMATION DURING SCROLLING

const addElements = () => {
    const windowHeight = $(window).height();
    const scrollValue = $(document).scrollTop();

    const $elements = $(".animated");

    $elements.each(function () {
        if ($(this).offset().top + $(this).height() - windowHeight <= scrollValue) {
            $(this).addClass("active");
        }
    });

    if (scrollValue <= 50) {
        $("*").removeClass("active");
    }
}

$(document).on("scroll", addElements);