var app = app || {};

app.ReservationView = Backbone.View.extend({
	events: {
		'click #make-reservation': 'makeReservation'
	},

	el: '#main',

  render: function() {
		$('#sub').removeClass('set-visible');
		$(document).scrollTop(0);
    var reservationViewTemplate = $('#reservationViewTemplate').html();
		var reservationViewHTML = _.template( reservationViewTemplate );
    this.$el.html(reservationViewHTML(this.model.toJSON() ));

  },

  makeReservation: function(e){
  e.stopImmediatePropagation();

  var reservation = app.reservations.find({user_id: this.model.attributes.user_id, address: this.model.attributes.location});
  reservation.save();

  app.router.navigate('/confirmation', true);

}

});
