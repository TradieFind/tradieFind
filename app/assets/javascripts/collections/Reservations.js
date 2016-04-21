var app = app || {};

app.Reservations = Backbone.Collection.extend({
    url: '/reservations',
    model: app.Reservation,
     initialize: function() {
          this.on('change', function() {
            app.reservations = new app.Reservations();
            app.reservations.fetch().done(function(){
              var viewReservationsView = new app.ViewReservationsView({model: app.reservations});
              viewReservationsView.render();
            });


          });
     }
});
