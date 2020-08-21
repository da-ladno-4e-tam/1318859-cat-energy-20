function initMap() {
  var coordinates = {lat: 59.938824, lng: 30.323080},

    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 59.938824, lng: 30.322080},
      zoom: 16
    });

  if (window.innerWidth < 768) {
    image = "img/map-pin-mobile.png"
  } else {
    image = "img/map-pin.png"
  }

  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
  });
}
