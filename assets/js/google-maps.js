function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 13.68030098061711, lng: -89.26915422485176};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 12,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'La Libertad, El Salvador' // Title Location
    });
}