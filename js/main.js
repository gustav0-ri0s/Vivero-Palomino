(function (window, $) {
	'use strict';

	// Cache document for fast access.
	var document = window.document;


	function mainSlider() {
		$('.bxslider').bxSlider({
			pagerCustom: '#bx-pager',
			mode: 'fade',
			nextText: '',
			prevText: ''
		});
	}

	mainSlider();



	var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
	$links.click(function(){
	   $(".slider-caption").removeClass('animated fadeInLeft');
	   $(".slider-caption").addClass('animated fadeInLeft');
	});

	$(".bx-controls").addClass('container');
	$(".bx-next").addClass('fa fa-angle-right');
	$(".bx-prev").addClass('fa fa-angle-left');


	$('a.toggle-menu').click(function(){
        $('.responsive .main-menu').toggle();
        return false;
    });

    $('.responsive .main-menu a').click(function(){
        $('.responsive .main-menu').hide();

    });

    $('.main-menu').singlePageNav();


})(window, jQuery);

var map = '';

function initialize() {
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(-6.471414, -76.364838)
    };
    map = new google.maps.Map(document.getElementById('map'),  mapOptions);
	
	var latlng= new google.maps.LatLng(-6.471414, -76.364838);
	
	createMarker(latlng);
}

function createMarker(latlng)
{
	var infowindow = new google.maps.InfoWindow({
		content: '<div class="content">Vivero Palomino<br>Direccion:<br>Tlfn:</div>'
	});
	var marker = new google.maps.Marker({
		position: latlng,
		title: 'Vivero Palomino',
		map: map		
	});
	google.maps.event.addListener(marker,'mousedown', function(){
		infowindow.open(map,marker);
	});
}

// load google map
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);