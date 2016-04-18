var app = app || {};

app.Quotes = Backbone.Collection.extend({
  url: '/quotes',
  //model this collection is based on
  model: app.Quote,
  initialize: function() {
    this.on("add", function (quote) {
    });
  }
});  
