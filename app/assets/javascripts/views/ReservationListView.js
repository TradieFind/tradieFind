var app = app || {};

app.ReservationListView = Backbone.View.extend({

  el: '#main',

  events: {
    'click': 'showReservation'
  },

  render: function() {
    $('#sub').removeClass('set-visible');
    // var name = this.model.attributes.first_name + " " + this.model.attributes.last_name;
    // var location = this.model.attributes.location;
    // var trade = this.model.attributes.trade_name;
    // var time = this.model.attributes.request_time;
    // var comment = this.model.attributes.comments;
    // // var status = this.model.attributes.job_status;
    // var user_id = this.model.attributes.user_id;

    this.$el.empty();
    this.$el.remove();

    var reservationListViewTemplate = $('#reservationListViewTemplate').html();
		var reservationListViewHTML = _.template( reservationListViewTemplate );
    this.$el.html(reservationListViewHTML(this.model ));

    this.$el.appendTo('.jumbotron');


      // this.$el.text(name + " requested a " + trade_name + " in " + location + " at " + time + "      ");
      // this.$el.append('<span id="available-' + user_id + '"></span>');
///////////////////


// If we want the number of tradies near them that are returned in search results
    app.users.fetch().done(function(){
    for (var i = 0; i < app.users.length; i++) {
      var user = app.users.models[i]
    }
      var numReservations = 0;
    if (user.attributes.trade == "customer"){
          numReservations += 1;
          console.log(numReservations);
          }
      });
    },

  showReservation: function() {
    app.router.navigate('reservations/' + this.model.get("id"), true);
  }

});
