ymaps.ready(init);

function init() {

  if (window.innerWidth < 768) {
    imageSize = [57, 53];
    imageOffset = [-28, -26]
  } else {
    imageSize = [113, 106];
    imageOffset = [-57, -53]
  }

  if (window.innerWidth < 1440) {
    mapCenter = [59.938824, 30.323080]
  } else {
    mapCenter = [59.938824, 30.320080]
  }

  var myMap = new ymaps.Map("map", {
      center: mapCenter,
      zoom: 16
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      "<div>$[properties.iconContent]</div>"
    ),

    myPlacemarkWithContent = new ymaps.Placemark([59.938824, 30.323080], {
      hintContent: "Собственный значок метки с контентом"
    }, {
      iconLayout: "default#imageWithContent",
      iconImageHref: "img/map-pin.png",
      iconImageSize: imageSize,
      iconImageOffset: imageOffset,
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
}
