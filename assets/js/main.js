// home banner owlcarousel
$(function () {
    $('#home-intro-banner .owl-carousel').owlCarousel({
        margin: 0,
        loop: true,
        items: 3,
        autoWidth: true
    });

    $('a[href]').filter(function () {
        return /\.pdf$/i.test($(this).attr('href'));
    }).addClass('pdf-file-link').attr('target', '_blank');
});

// wat zijn we van plan afbeeldingen masonry
$(window).on('load', function () {
    $('#wat-zijn-we-van-plan-grid').masonry({
        itemSelector: '.grid-item',
        gutter: 0
    });
});

// optional bootswatch themes
(function () {
    var theme = getParameterByName('bw-theme');
    if (theme) {
        $('#bs-theme').removeAttr('integrity');
        $('#bs-theme').removeAttr('crossorigin');
        $('#bs-theme').attr('href', 'https://bootswatch.com/3/' + encodeURIComponent(theme) + '/bootstrap.min.css');
    }
    var themes = ["Default", "Cerulean", "Cosmo", "Cyborg", "Darkly", "Flatly", "Journal", "Lumen",
        "Paper", "Readable", "Sandstone", "Simplex", "Slate", "Spacelab", "Superhero", "United", "Yeti"];
    $(document.body).find('footer').append($('<h2>(tijdelijke opties) Themes:</h2>'));
    for (let i = 0; i < themes.length; i++) {
        $(document.body).find('footer').append($('<a style="margin: 3px;" href="?bw-theme=' + themes[i].toLowerCase() + '" class="btn btn-warning">' + themes[i] + '</a>'));
    }
})();


if ($('#aanmelden-form-names').length > 0) {
    var content = $('#aanmelden-form-names').html();
    console.log(content);
    var $formgroups = $('#aanmelden-form .form-group')
    $(content).find('li').each(function (i) {
        $formgroups.eq(i).find('label').text($(this).text())
    });
}

var parsleyOptions = {
    successClass: "has-success",
    errorClass: "has-error",
    classHandler: function(el) {
        return el.$element.closest(".form-group");
    },
    errorsWrapper: "<span class='help-block'></span>",
    errorTemplate: "<span></span>"
};

// "aanmelden form" validation
$(function () {
    $('#aanmelden-form').parsley(parsleyOptions).on('field:validated', function () {
        var ok = $('.has-error').length === 0;
        $('.bs-callout-info').toggleClass('hidden', !ok);
        $('.bs-callout-warning').toggleClass('hidden', ok);
    })
    .on('form:submit', function () {
        return $('.has-error').length === 0; // submit if no error
    });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function initMap() {
    if ($('#map').length < 1)
        return;
    var map;
    function createMap() {
        var config = {
            center: new google.maps.LatLng(51.771911, 4.965214, 17),
            zoom: 16,
            scrollwheel: !1,
            disableDefaultUI: !0,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#e9e9e9"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 29
                }, {
                    weight: .2
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 18
                }]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#dedede"
                }, {
                    lightness: 21
                }]
            }, {
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                elementType: "labels.text.fill",
                stylers: [{
                    saturation: 36
                }, {
                    color: "#333333"
                }, {
                    lightness: 40
                }]
            }, {
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{
                    color: "#f2f2f2"
                }, {
                    lightness: 19
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 20
                }]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#fefefe"
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }]
        };
        map = new google.maps.Map(document.getElementById("map"), config);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(51.771911, 4.965214, 17),
            icon: pointer,
            map: map,
            url: "https://goo.gl/maps/UwHpeeGz4PJ2"
        });
        google.maps.event.addListener(marker, "click", function () {
            window.open(this.url, "_blank")
        });
    }
    var pointer = {
        url: "/assets/img/pointer.svg",
        scaledSize: new google.maps.Size(80, 88),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(40, 85)
    };
    google.maps.event.addDomListener(window, "load", createMap);
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        center.setCenter(center)
    });
}