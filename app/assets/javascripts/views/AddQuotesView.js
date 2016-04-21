var app = app || {};

app.AddQuoteView = Backbone.View.extend({
  initialize:function(){
  },

  events: {
    "click button" : "createQuote"
  },

  el: "#main",

  createQuote: function(){
    var quote = new app.Quote();
    var tradieQuote = this.$el.find("#main").val();
    quote.set({
      content: tradieQuote
    });
    quote.save();
    app.quotes.add(quote);
    this.$el.find("#main").val('').focus();
    // app.router.navigate("users/" + ("") ,true);
    // empty textarea and focus cursor on same box
  },

  render: function(){
    $('#sub').removeClass('set-visible');
    var addQuoteViewTemplate = $("#addQuoteViewTemplate").html();
    var addQuoteViewHTML = _.template(addQuoteViewTemplate);
    this.$el.html(addQuoteViewHTML);

  }
});
