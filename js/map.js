// ---------------------------------------------------------------------------------------------------------------------------->
// MAP ELEMENT  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->


// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 20,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(19.116197, 72.909782), // Prudential
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(19.116197, 72.909782),
        map: map,
        icon: 'img/map-marker.png'

    });
};
