 var app = app || {};

app.ViewReservationsView = Backbone.View.extend({
  initialize: function(){
    console.log('ViewReservationsView init');
  },

  el: '#main',


  render: function(){
    console.log('rendering ViewReservationsView')
    this.$el.empty();
    var ReservationsTemplate = $('#ViewReservationViewTemplate').html();
    this.$el.html(ReservationsTemplate);
    this.model.each(function(m){
      var viewReservationView = new app.ViewReservationView({model: m});
      viewReservationView.render();
    });
    }
});
