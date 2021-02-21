"use strict";
let map;
let lat;
let long;
let marker;
let newPosition;
const issIcon = "./img/iss-icon.svg";
function initMap() {
    const mapContainer = document.querySelector("#map");
    lat = 0;
    long = 0;
    let position = { lat: lat, lng: long };
    const features = {
        center: position,
        zoom: 4,
    };
    map = new google.maps.Map(mapContainer, features);
    console.log(typeof map);
    const markerIcon = {
        url: issIcon,
    };
    marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: markerIcon,
    });
}
function getLocation() {
    fetch("https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json", {
        headers: {
            "Access-Control-Allow-Headers": "*",
        },
    })
        .then(function (response) {
        return response.json();
    })
        .then(function (json) {
        updateLocation(json);
    })
        .catch(function (error) {
        console.log(error);
        clearInterval(countdown);
    });
}
function updateLocation(iss) {
    const position = iss.iss_position;
    lat = parseInt(position.latitude);
    long = parseInt(position.longitude);
    newPosition = new google.maps.LatLng(lat, long);
    marker.setPosition(newPosition);
    map.setCenter(newPosition);
}
const countdown = setInterval(getLocation, 3000);
