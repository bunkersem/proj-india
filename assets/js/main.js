

$(function () {
    $('#home-intro-banner .owl-carousel').owlCarousel({
        margin:0,
        loop:true,
        items: 3,
        autoWidth: true
    });

    $('a[href]').filter(function(){
        return /\.pdf$/i.test($(this).attr('href'));
     }).addClass('pdf-file-link')
});

$( window ).on('load', function() {
    $('#wat-zijn-we-van-plan-grid').masonry({
        itemSelector: '.grid-item',
        gutter: 0
    });
});