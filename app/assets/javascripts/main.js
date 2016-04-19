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

  app.reviews = new app.Reviews();
  var trReview = app.reviews.fetch();

  app.trades = new app.Trades();
  var trTrade = app.trades.fetch();


//   window.setInterval(function(){
//   app.reservations.fetch();
// }, 100);

  $.when(trUsers, trRes, trQuote, trReview, trTrade).then( function() {
    app.router = new app.AppRouter();
    Backbone.history.start();
  });


});
