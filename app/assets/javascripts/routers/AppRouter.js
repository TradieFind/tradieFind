var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      'reservations/:id': 'showReservation'
    },

    home: function() {
      var appView = new app.AppView();
      appView.render();
