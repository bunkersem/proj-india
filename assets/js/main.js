

$(function () {
    $('#home-intro-banner .owl-carousel').owlCarousel({
        margin:0,
        loop:true,
        items: 3,
        autoWidth: true
    });

    
});

$( window ).on('load', function() {
    $('#wat-zijn-we-van-plan-grid').masonry({
        itemSelector: '.grid-item',
        gutter: 0
    });
});