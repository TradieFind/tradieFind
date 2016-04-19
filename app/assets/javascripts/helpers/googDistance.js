function googDistance(lat1, lon1, lat2, lon2) {
  var xyz = googDistanceCallback(lat1, lon1, lat2, lon2);
  $.when(xyz).then(function() {xyz = distanceIs});
  console.log("C "+xyz);
  return xyz;
};


function googDistanceCallback(lat1, lon1, lat2, lon2) {
  var origin1 = new google.maps.LatLng(lat1, lon1);
  var destination1 = new google.maps.LatLng(lat2, lon2);
  // var distanceResults = -1;
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
            console.log("A " + distanceResults);
            distanceIs = distanceResults;
            console.log(distanceIs);



          }
        }
      }
    }
  ));
  // dfd.resolve(function(){
  //   console.log("B: " + distanceResults);
  //   return distanceResults;
  // });
};

var distanceIs = 0;
