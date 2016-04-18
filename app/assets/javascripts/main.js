// changes underscore templating to {{ }}
_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};


var app = app || {};

$(document).ready(function() {

  app.users = new app.Users();
  var trUsers = app.users.fetch();

  app.reservations = new app.Reservations();
  var trRes = app.reservations.fetch();

  $.when(trUsers, trRes).then( function() {
    app.router = new app.AppRouter();
    Backbone.history.start();
  });


});
