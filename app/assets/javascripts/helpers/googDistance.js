
function googDistance(lat1, lon1, lat2, lon2, tag_ref) {
  var origin1 = new google.maps.LatLng(lat1, lon1);
  var destination1 = new google.maps.LatLng(lat2, lon2);
  var service = new google.maps.DistanceMatrixService();
  dfd =$.Deferred(service.getDistanceMatrix(
    { origins: [origin1],
      destinations: [destination1],
      travelMode: google.maps.TravelMode.DRIVING
    },
    function(response, status) {
      console.log("COORDS");
      console.log(lat1);
      console.log(lon1);
      console.log(lat2);
      console.log(lon2);
      console.log(tag_ref);
      if (status !== google.maps.DistanceMatrixStatus.OK) {
        alert('Error was: ' + status);
      } else {
        for (var i = 0; i < response.originAddresses.length; i++) {
          var results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            distanceResults = results[j].distance.value;
            distanceResults = distanceResults/1000;
            var tag_value = tag_ref;
            $('#' + tag_value).text(Number(distanceResults.toFixed(1)));
          }
        }
      }
    }
  ));

};  //END googDistance

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function findCurrentLoc() {
  // var map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: -34.397, lng: 150.644},
  //   zoom: 6
  // });
  // var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      renderMap(position.coords.latitude, position.coords.longitude,true);
      var LatLon ="LAT: " + Number(position.coords.latitude.toFixed(3))
                          + " LON: " + Number(position.coords.longitude.toFixed(3));
// (Number(distanceResults.toFixed(1))
      var currentLoc = {};
      currentLoc.lat = position.coords.latitude;
      currentLoc.lon = position.coords.longitude;
      currentLoc.userid = app.current_user;
      currentLoc.address1 = '244 George street';
      currentLoc.address2 = 'Sydney';
      localStorage.setItem( 'currentLoc', JSON.stringify(currentLoc) );


      $('#cust_location_label').text(LatLon);
      // infoWindow.setPosition(pos);
      // infoWindow.setContent('Location found.');
      // map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
};

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
function handleLocationError() {
  // infoWindow.setPosition(pos);
  // infoWindow.setContent(browserHasGeolocation ?
  //                       'Error: The Geolocation service failed.' :
  //                       'Error: Your browser doesn\'t support geolocation.');
  $('cust_location_label').val() = 'Error: The Geolocation service failed.';
};



function renderMap(inLat, inLon, getAddressBool) {

  var centerLoc = new google.maps.LatLng(inLat, inLon);
  // cust_location_label2'
  window.map = new google.maps.Map(document.getElementById('cust_location_map1'), {
    center: centerLoc,
    zoom: 11,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
  position: centerLoc,
  map: map,
  title: 'Your location'
});
  if (getAddressBool) {
    getAddress(centerLoc , map);
  }

};


  // Specify location, radius and place types for your Places API search.
function getAddress(centerLoc , map) {
  var request = {
    location: centerLoc ,
    radius: '10'
  };
  console.log(map);
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < 1; i++) {
        console.log(results[i].name);
        $('#cust_location_label2').text(results[i].name);

      }
    }
  });
}

function showTradies(inLat, inLon,tagText)  {
 // Create the map.
  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: inLat, lng: inLon},
    map: map,
    icon: image,
    title: tagText
  });
}
