var map;

function mapMaker(id, longt, lat) {
	var id = id;
	flag_item = 1;
	var img = 'img/'
	var
		contentString12 = '<div class="map__info-marker">детальніше про <span class="big-text">KANDINSKY Odessa Residence</span><a href="#img11"><img src="img/down-arrow-map.png" class="img11"></a></div>',
		contentString2 = '<div class="map__info-marker">детальніше про <span class="big-text">CHICAGO CENTRAL HOUSE</span><a href="#img2"><img src="img/down-arrow-map.png" class="img2"></a></div>',
		contentString3 = '<div class="map__info-marker">детальніше про <span class="big-text">Resident</span><a href="#img6"><img src="img/down-arrow-map.png" class="img6"></a></div>',
		contentString4 = '<div class="map__info-marker">детальніше про <span class="big-text">New York</span><a href="#img1"><img src="img/down-arrow-map.png" class="img1"></a></div>',
		contentString5 = '<div class="map__info-marker">детальніше про <span class="big-text">Bristol</span><a href="#img12"><img src="img/down-arrow-map.png" class="img12"></a></div>',
		contentString6 = '<div class="map__info-marker">детальніше про <span class="big-text">Washington</span><a href="#img4"><img src="img/down-arrow-map.png" class="img4"></a></div>',
		contentString7 = '<div class="map__info-marker">детальніше про <span class="big-text">Einstein</span><a href="#img6"><img src="img/down-arrow-map.png" class="img6"></a></div>',
		contentString8 = '<div class="map__info-marker">детальніше про <span class="big-text">Philadelphia</span><a href="#img3"><img src="img/down-arrow-map.png" class="img3"></a></div>',
		contentString10 = '<div class="map__info-marker">детальніше про <span class="big-text">Happy House</span><a href="#img11"><img src="img/down-arrow-map.png" class="img11"></a></div>',
		contentString11 = '<div class="map__info-marker">детальніше про <span class="big-text">San Francisco</span><a href="#img10"><img src="img/down-arrow-map.png" class="img10"></a></div>';
		

	var locations = [
				[contentString12, 46.450553, 30.764012, img + 'kandinsky-icon.png'],
				[contentString2, 50.433622, 30.513137, img + 'chicago-icon.png'],
				[contentString3, 50.434986, 30.508315, img + 'resident-icon.png'],
				[contentString4, 50.426332, 30.514147, img + 'new-york-icon.png'],
				[contentString5, 50.407029, 30.507624, img + 'bristol-icon.png'],
				[contentString6, 50.425657, 30.518944, img + 'washington-icon.png'],
				[contentString7, 50.450366, 30.489093, img + 'einstein-icon.png'],
				[contentString7, 50.450366, 30.489093, img + 'einstein-icon.png'],
				[contentString10, 50.437070, 30.541305, img + 'philadelphia-icon.png'],
				[contentString10, 50.458392, 30.428209, img + 'happy-house-icon.png'],
				// [contentString8, 50.439367, 30.544927, "/img/map/bank.png"],
        		[contentString11, 50.458894, 30.409671, img + 'sanfrancisco-icon.png']
        		
        		];
	// var centerX = 50.433613;
	// var centerY = 30.513188;

	// if($(window).width() < 748) {
	// 	centerY = locations[0][2];
	// }
	 map = new google.maps.Map(document.getElementById(id), {
			zoom: 13.4,
			scrollwheel: false,
			center: new google.maps.LatLng( 50.440626, 30.512669),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			streetViewControl: false,
			navigationControl: false,
			mapTypeControl: false
		});

	var infowindow = new google.maps.InfoWindow();
	var marker, i;

	for (i = 0; i < locations.length; i++) {
	    marker = new google.maps.Marker({
	        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	        map: map,
	        // anime marker
	        animation: google.maps.Animation.DROP,
	        icon: {
	            url: locations[i][3],
	            // scaledSize: new google.maps.Size(30, 40)
	        }
	    });
	    infowindow.setContent(locations[i][0]);
	    infowindow.open(map, marker);
	    google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	            infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
	        }
	    })(marker, i));
	}

	$.getJSON("js/map-style.json", function(data) {
         map.setOptions({styles: data});
     });

}
 if (document.getElementById('map')) {
 	mapMaker('map', 50.433622, 30.513137);
 }

// if (document.getElementById('map')) {
// 	mapMaker('map');
// }
$('.map-1').click(function(){
    map.setCenter({lat: 50.440626, lng: 30.512669}); 
	$('.map-2').removeClass('is-active');
	$('.map-1').addClass('is-active');
});

$('.map-2').click(function(){
    map.setCenter({lat: 46.450553, lng: 30.764012}); 
	$('.map-1').removeClass('is-active');
	$('.map-2').addClass('is-active');

});


// if (document.getElementById('map')) {
	
// 	var markers = document.getElementById('maps-hidden').getAttribute('data-map');
// 	markers = JSON.parse(markers);

// 	mapMaker('map', 0, 0, markers);
// }
