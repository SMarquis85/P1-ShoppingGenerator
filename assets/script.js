function initMap() {
    var ottawa = { lat: 45.4215, lng: -75.6989 };
    var barrie = { lat: 44.3894, lng: -79.6903 };
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: ottawa
    });
  
    var markerOttawa = new google.maps.Marker({
      position: ottawa,
      map: map,
      title: 'Ottawa Malls'
    });
  
    var markerBarrie = new google.maps.Marker({
      position: barrie,
      map: map,
      title: 'Barrie Malls'
    });
  }