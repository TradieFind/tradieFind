var app = app || {};

$(document).ready(function() {

  app.users = new app.Users();
  app.users.fetch();

  app.reservations = new app.Reservations();
  app.reservations.fetch();

  app.router = new app.AppRouter();
  Backbone.history.start();

});
