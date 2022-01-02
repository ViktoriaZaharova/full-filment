//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end

$('.partner-slider').slick({
    slidesToShow: 6,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
                arrows: false
            }
        }
    ]
});

$('.btn-burger').on('click', function () {
   $('.overlay').fadeIn();
   $('.mobile-menu').fadeIn();
});

$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        $('.advantages-slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            variableWidth: true,
            arrows: false,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $('.category-slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            variableWidth: true,
            arrows: false,
            // centerMode: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        $('.category-work-row:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            variableWidth: true,
            arrows: false,
            // centerMode: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    } else {
        $(".advantages-slider.slick-initialized").slick("unslick");
        $(".category-slider.slick-initialized").slick("unslick");
        $(".category-work-row.slick-initialized").slick("unslick");
    }
});
// slick active
