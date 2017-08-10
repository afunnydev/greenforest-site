

/*-------------------------------------------------------------
  07. Google Map js
---------------------------------------------------------------*/
var mapElement = document.getElementById('googleMap');

function initialize() {
    var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        center: new google.maps.LatLng( 45.7543587,-73.7117936),
    };
    var map = new google.maps.Map(mapElement,
        mapOptions
    );
    var marker = new google.maps.Marker({
    position: map.getCenter(),
    animation:google.maps.Animation.BOUNCE,
    icon: '/img/icons/map-marker.png',
    map: map
    });

    map.setOptions({});

    var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
    ];
    map.setOptions({styles: styles});   
}
if (mapElement){
    google.maps.event.addDomListener(window, 'load', initialize);
} else {}   

				
				
				
				
				
				