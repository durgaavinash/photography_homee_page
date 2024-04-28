$(document).ready(function () {
    // Update testimonial text and slide number when the testimonial carousel slides
    $('#testimonialCarousel').on('slid.bs.carousel', function (event) {
        var index = $(this).find('.carousel-item.active').index();
        var text = '';
        switch (index) {
            case 0:
                text = 'Testimonial 1';
                break;
            case 1:
                text = 'Testimonial 2';
                break;
            case 2:
                text = 'Testimonial 3';
                break;
            case 3:
                text = 'Testimonial 4';
                break;
        }
        $('.testimonial-text').text(text);
        $('.testimonial-slide-number').text(index + 1);
    });


    // Initialize Owl Carousel
    var owl = $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            },
            600: {
                items: 2,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            },
            1000: {
                items: 4,
                loop: true,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            }
        },
        onInitialized: function (event) {
            updateSlideNumber(event);
        },
        onChanged: function (event) {
            updateSlideNumber(event);
        }
    });

    // Custom navigation controls
    $(".owl-carousel-prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".owl-carousel-next").click(function () {
        owl.trigger('next.owl.carousel');
    });

    // Function to update slide number
    function updateSlideNumber(event) {
        var element = event.relatedTarget;
        var currentIndex = element.relative(element.current()) + 1;
        var totalItems = element.items().length;
        $(".owl-carousel-slide-number").text(currentIndex + "/" + totalItems);
    }

});