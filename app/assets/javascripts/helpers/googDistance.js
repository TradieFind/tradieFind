
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
  var map = new google.maps.Map(document.getElementById('cust_location_map1'), {
    center: centerLoc,
    zoom: 15,
    scrollwheel: false
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
    // types: ['store']
  };
  // Create the PlaceService and send the request.
  // Handle the callback with an anonymous function.

  // var x = document.getElementById('cust_location_label2');
  // $('#cust_location_label2').val(map);
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

// function getPlaceNearby() {
//   var pyrmont = new google.maps.LatLng(-33.8665, 151.1956);
//   // cust_location_label2'
//   var map = new google.maps.Map(document.getElementById('cust_location_label2'), {
//     center: pyrmont,
//     zoom: 15,
//     scrollwheel: false
//   });
//   debugger
//   // Specify location, radius and place types for your Places API search.
//   var request = {
//     location: pyrmont,
//     radius: '500',
//     types: ['store']
//   };
//   // Create the PlaceService and send the request.
//   // Handle the callback with an anonymous function.
//
//   // var x = document.getElementById('cust_location_label2');
//   $('#cust_location_label2').val(map);
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, function(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < 1; i++) {
//         console.log(results[i]);
//         $('#cust_location_label2').text(results[i]);
//
//       }
//     }
//   });
// }
// Run the initialize function when the window has finished loading.
// google.maps.event.addDomListener(window, 'load', initialize);
function initMap(t)  {
 // Create the map.
 var map = new google.maps.Map(document.getElementById('map'), {
   zoom: 4,
   center: {lat: 37.090, lng: -95.712},
   mapTypeId: google.maps.MapTypeId.TERRAIN
 });
 // Construct the circle for each value in citymap.
 // Note: We scale the area of the circle based on the population.
 for (var city in citymap) {
   // Add the circle for this city to the map.
   var cityCircle = new google.maps.Circle({
     strokeColor: '#FF0000',
     strokeOpacity: 0.8,
     strokeWeight: 2,
     fillColor: '#FF0000',
     fillOpacity: 0.35,
     map: map,
     center: citymap[city].center,
    //  radius: Math.sqrt(citymap[city].population) * 100
     radius: Math.sqrt(citymap[city].numArticles[t]) * 4000,

   });

 }
}


function loadjscssfile(filename){
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
        document.getElementsByTagName("head")[0].appendChild(fileref);
        initMap();
        // console.log(filename);

}
var myObj = function(){
    this.property = 'foo';
    this.bar = function(){
    }
}
myObj.prototype.objProp = true;
var newObj = new myObj();


  // This example creates circles on the map, representing populations in North
  //      America.
  //
  //      First, create an object containing LatLng and population for each city.
var citymap = {
  0: {
    name: "chicago",
    center: {lat: 41.878, lng: -87.629},
    population: 2714856,
    numArticles: []
  },
  1: {
    name: "new york",
    center: {lat: 40.714, lng: -74.005},
    population: 8405837,
    numArticles: []
  },
  2: {
    name: "los angeles",
    center: {lat: 34.052, lng: -118.243},
    population: 3857799,
    numArticles: []
  },
  3: {
    name: "vancouver",
    center: {lat: 49.25, lng: -123.1},
    population: 603502,
    numArticles: []
  },
  4: {
    name: "houston",
    center: {lat: 29.7, lng: -95.36},
    population: 603502,
    numArticles: []
  },
  5: {
    name: "miami",
    center: {lat: 25.7, lng: -80.2},
    population: 603502,
    numArticles: []
  }
};
