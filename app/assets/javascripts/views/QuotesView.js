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

    app.quotes.each(function(q){
      console.log(q);
      var x = $('<li>').text(q.get("id") + " reservation_id: " + q.get("reservation_id") + " quote_value: " + q.get("quote_value"));
      addData.after(x);
    });
  }

});
