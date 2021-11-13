$(function(){
    $(".strategy__slider").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1110,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })


    $(".header__ic-menu").click(function() {
        $(".header__col").toggleClass("active")
        $("body").toggleClass('lock')
    })

    $(".header__close-ic").click(function() {
        $(".header__col").removeClass("active")
        $("body").removeClass('lock')
    })
});