function googDistance(lat1, lon1, lat2, lon2) {

  var origin1 = {lat: lat1, lng: lon1};
  var destinationA = {lat: lat2, lng: lon2};
  var service = new google.maps.DistanceMatrixService;
	var distanceResults = [];
  service.getDistanceMatrix({
    origins: origin1,
    destinations: destinationA,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
  }, function(response, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      alert('Error was: ' + status);
    } else {
        for (var j = 0; j < results.length; j++) {
          distanceResults.push(results[j].distance.text);
        }
				return distanceResults[0];
    }
  });
}
