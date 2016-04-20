var app = app || {};

app.MyQuotesView = Backbone.View.extend({

  el: '#sub',

  render: function() {
    //var ReservationsTemplate = $('#ViewReservationViewTemplate').html();
    //this.$el.html(ReservationsTemplate);
    var quotesViewTemplate = $('#quotesViewTemplate').html();
    this.$el.html(quotesViewTemplate);
    _(this.model).each(function(m){
      var myQuoteView = new app.MyQuoteView({model: m});
      myQuoteView.render();
  });
}
});
