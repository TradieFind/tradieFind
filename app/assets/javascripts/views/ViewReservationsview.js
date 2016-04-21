var app = app || {};

app.ViewReservationsView = Backbone.View.extend({
  initialize: function(){

  },

  el: '#main',


  render: function(){
    this.$el.empty();
    console.log("here2");
    var ReservationsTemplate = $('#ViewReservationViewTemplate').html();
    this.$el.html(ReservationsTemplate);
    this.model.each(function(m){
      var viewReservationView = new app.ViewReservationView({model: m});
      viewReservationView.render();
    });
    }
});
