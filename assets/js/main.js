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

var username = 'api';
var password = 'key-46e82c871979d82c9b67fde50807bb74';

function sendEmail() {
    $.ajax({
        url: "https://api.mailgun.net/v3/sandbox93d8299f673a4c32952b7592956cb3d9.mailgun.org/messages",
        dataType: 'json',
        async: false,
        data: JSON.stringify({
            from: 'Mailgun Sandbox <postmaster@sandboxb337e33318da4b72af2fc2f0711b9a72.mailgun.org>',
            subject: 'Hello Sem Postma',
            text: 'Congratulations Sem Postma, you just sent an email with Mailgun!  You are truly awesome!',
            to: 'Sem Postma <sem.postma@gmail.com>'
        }),
        // cache: false,
        // contentType: false,
        // processData: false,
        method: 'GET',
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
        },
    });
}