function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    // need a google api key to work!!!
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }