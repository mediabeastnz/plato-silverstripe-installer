$(document).foundation();

$(document).ready(function() {
    // google analytics
    $('[data-ga-label]').each(function(){
        $(this).on('click', function() {
            var $trackingName = $(this).data('ga-label'),
            $tagName = $(this).prop("tagName"),
            $action = 'click';
            if($tagName=='input'){
                $action = 'submit';
            }
            ga('send', 'event', 'button', $action, $trackingName);
        });
    });

    // standard images
    $(".fancybox").fancybox();
    // videos
    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
});

$(document).ready(function() {

	var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  });

	$([data-google-maps]).each(function(){
		var locations = $(this).data('google-maps'),
		bounds = new google.maps.LatLngBounds();

		for (i = 0; i < locations.length; i++) {
			bounds.extend( new google.maps.LatLng(locations[i][1], locations[i][2]) );
		}

		var featureOpts = [
			{
				stylers: [
					{ saturation : 0 },
					{ gamma: 0 }
				]
			},
			{
				elementType: 'labels',
				stylers: [
					{ visibility: 'on' }
				]
			}
		];

		var mapOptions = {
			scrollwheel: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
			},
			mapTypeId: MY_MAPTYPE_ID
		};

		if(locations.length == 1){
			mapOptions['zoom'] = 14;
			mapOptions['center'] = new google.maps.LatLng(locations[0][1], locations[0][2]);
		}

		map = new google.maps.Map($(this), mapOptions);
		var styledMapOptions = { name: 'Custom' };
		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

		if(locations.length > 1){
			map.fitBounds(bounds);
		}

		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

		for (var i = 0; i < locations.length; i++) {
			var location = locations[i];
			var marker = new google.maps.Marker({
				position: {lat: location[1], lng: location[2]},
				map: map,
				icon: location[4],
				title: location[0],
				zIndex: location[3]
			});
		}
	});
});

var map;
var MY_MAPTYPE_ID = 'custom_style';
function initialize_map(locations) {


}
