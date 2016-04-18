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

  app.quotes = new app.Quotes();
  var trQuote = app.quotes.fetch();

  $.when(trUsers, trRes, trQuotes).then( function() {
    app.router = new app.AppRouter();
    Backbone.history.start();
  });


});
