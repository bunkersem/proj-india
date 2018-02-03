$(function () {
    $('#home-intro-banner .owl-carousel').owlCarousel({
        margin:0,
        loop:true,
        items: 3,
        autoWidth: true
    });

    $('a[href]').filter(function(){
        return /\.pdf$/i.test($(this).attr('href'));
     }).addClass('pdf-file-link').attr('target', '_blank');
    var comp = new RegExp(location.host);
    $('a[href]').filter(function() {
        return comp.test($(this).attr('href'));
    }).attr('target', '_blank');
});

$( window ).on('load', function() {
    $('#wat-zijn-we-van-plan-grid').masonry({
        itemSelector: '.grid-item',
        gutter: 0
    });
});


if ($('#zonzelf-form-names').length > 0) {
    var content = $('#zonzelf-form-names').html();
    var $formgroups = $('#zonzelf-form .form-group')
    $(content).find('li').each(function(i) {
        $formgroups.eq(i).find('label').text($(this).text())
    });
}