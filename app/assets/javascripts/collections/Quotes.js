var app = app || {};

app.Quotes = Backbone.Collection.extend({
  url: '/quotes',
  //model this collection is based on
  model: app.Quote,
  // initialize: function() {
  //   this.on("change", function () {
  //     app.quotes.fetch().done(function(){
  //       var myQuotesView = new app.MyQuotesView({collection: app.quotes});
  //       console.log("quotes here");
  //       myQuotesView.render();
  //   });
  // });
  // }
});
