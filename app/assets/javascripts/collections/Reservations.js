var app = app || {};

app.Reservations = Backbone.Collection.extend({
    url: '/reservations',
    model: app.Reservation,
     initialize: function() {
          //this.on('add', function(reservation) {
            //  var viewReservationView = new app.ViewReservationView({model: reservation});
              //viewReservationView.render();
          //});
     }
});
