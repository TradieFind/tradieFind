 var app = app || {};

app.ViewReservationsView = Backbone.View.extend({
  initialize: function(){
  },

  el: '#main',


  render: function(){
    $('#sub').removeClass('set-visible');
    this.$el.empty();
    var ReservationsTemplate = $('#ViewReservationViewTemplate').html();
    this.$el.html(ReservationsTemplate);
    this.model.each(function(m){
      var viewReservationView = new app.ViewReservationView({model: m});
      viewReservationView.render();
    });
    }
});
