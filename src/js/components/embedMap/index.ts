import { Loader } from "@googlemaps/js-api-loader";

let map: google.maps.Map;
let lat: number;
let long: number;
let marker: google.maps.Marker;
let newPosition: google.maps.LatLng;
let countdown: number;
const issIcon = "./img/iss-icon.svg";

export default function handleMap(): void {
  const loader = new Loader({
    apiKey: "AIzaSyBh8aQrZtZD1Pyb_BQiIdg71NMvSef5DYA",
  });

  loader
    .load()
    .then(() => {
      initMap();
    })
    .catch((error) => {
      console.log(error);
    });
  getLocation();
  countdown = setInterval(getLocation, 5000);
}

function initMap(): void {
  const mapContainer = document.querySelector("#map") as HTMLDivElement;
  lat = 0;
  long = 0;
  let position: google.maps.LatLngLiteral = { lat: lat, lng: long };

  const features = {
    center: position,
    zoom: 4,
  };
  map = new google.maps.Map(mapContainer, features);

  const markerIcon = {
    url: issIcon,
  };

  marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: markerIcon,
  });
}

function getLocation(): void {
  fetch(
    "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json",
    {
      headers: {
        "Access-Control-Allow-Headers": "*",
      },
    }
  )
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

interface ISSPosition {
  iss_position: {
    longitude: string;
    latitude: string;
  };
}

function updateLocation(iss: ISSPosition): void {
  console.log("updating");

  const position = iss.iss_position;

  lat = parseInt(position.latitude);
  long = parseInt(position.longitude);

  newPosition = new google.maps.LatLng(lat, long);

  marker.setPosition(newPosition);
  map.setCenter(newPosition);
}
