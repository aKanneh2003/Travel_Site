function initMap() {
    // Replace 'YOUR_LATITUDE' and 'YOUR_LONGITUDE' with your desired location coordinates
    const latitude = 46.9061806; // 46° 54' 22.25'' N in decimal format
    const longitude = 19.6912806; // 19° 41' 28.61'' E in decimal format
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: latitude, lng: longitude },
    });
    // Add a marker to the map
    const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
    });
}