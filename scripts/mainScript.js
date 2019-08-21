// BUTTON IN MAIN HEADER CLICK EVENT

$("header.mainHeader div.circle").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 500)
});


// ELEMENTS ANIMATION DURING SCROLLING, SHOW/HIDE LANGUAGE ICON

const addElements = () => {
    const windowHeight = $(window).height();
    const scrollValue = $(document).scrollTop();
    const contactSection = $("section.contact")

    const $elements = $(".animated");

    $elements.each(function () {
        if ($(this).offset().top + $(this).height() - windowHeight <= scrollValue) {
            $(this).addClass("active");
        }
    });

    if (scrollValue <= 50) {
        $("*").removeClass("active");
    }

    if ((scrollValue > windowHeight) && (scrollValue < (contactSection.offset().top + (contactSection.height() / 2) - windowHeight))) {
        $("div.language").css("display", "block");
    } else {
        $("div.language").css("display", "none");
    }
}

$(document).on("scroll", addElements);