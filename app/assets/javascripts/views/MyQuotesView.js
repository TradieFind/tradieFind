var app = app || {};

app.MyQuotesView = Backbone.View.extend({

  el: '#sub',

  render: function() {
    this.$el.empty();;
    var quotesViewTemplate = $('#quotesViewTemplate').html();
    this.$el.html(quotesViewTemplate);
      console.log('collection', this.collection);
      //this.collection.each(function(m){
     this.collection.each(function(m){
      var myQuoteView = new app.MyQuoteView({model: m});
      myQuoteView.render();
  });
}
});
