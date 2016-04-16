var app = app || {};

$(document).ready(function() {

  app.reservations = new app.Reservations();
  app.reservations.fetch();

});
