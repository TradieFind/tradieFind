var app = app || {};

app.QuotesView = Backbone.View.extend({

  el: '#main',

  render: function() {
    console.log("app.QuotesView.render");
		$(document).scrollTop(0);
    var appViewTemplate = $("#quotesViewTemplate").html();
    this.$el.html(appViewTemplate);
    // var appViewTemplate = $("#anotherTemplate").html();
    // this.$el.append(appViewTemplate);
    var addData = this.$el.find("#quoteData");
    var quoteForTradie = app.quotes.where({user_id: app.current_user.id});
    quoteForTradie.each(function(q){
      console.log(q);
      var x = $('<li>').text(q.get("id") + " reservation_id: " + q.get("reservation_id") + " quote_value: " + q.get("quote_value"));
      addData.after(x);
    });
  }

});


// confirmSeat: function() {
//      if ($(".selected").length > 0) {
//          clearInterval(checkForReservation);
//          var flight_id = this.model.attributes.id;
//          var seat = $(".selected").eq(0).attr("id");
//          var reservation = app.reservations.where({user_id: app.current_user.id, seat: seat, flight_id: flight_id });
//          app.router.navigate('reservations/' + reservation[0].id, true);
//
//        // var userID = @current_user.id;
//
//      } else {
//          alert("Please select a seat.");
//          return;
//      }
//  }
