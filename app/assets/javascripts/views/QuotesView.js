var app = app || {};

app.QuotesView = Backbone.View.extend({

  el: '#main',

  render: function() {
    $('#sub').removeClass('set-visible');
		$(document).scrollTop(0);
    var appViewTemplate = $("#quotesViewTemplate").html();
    this.$el.html(appViewTemplate);
    // var appViewTemplate = $("#anotherTemplate").html();
    // this.$el.append(appViewTemplate);
    var addData = this.$el.find("#quoteData");
    // console.log(app.current_user);
    var quoteForTradie = app.quotes.where({user_id: app.current_user});

    var Dist = distanceSimple( -33.872232, 151.210164,-33.886666, 151.219605,"K");

    var googDist = googDistance( -33.872232, 151.210164,-33.886666, 151.219605);

    _(quoteForTradie).each(function(q){
      // console.log(q);
      console.log(googDist);
      var x = $('<li>').text(q.get("id")
            + " reservation_id: " + q.get("reservation_id")
            + " quote_value: " + q.get("quote_value")
            + " Distance: " + Dist + " googDistance: " + googDist);
      addData.after(x);
    });
  }

});
