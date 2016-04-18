var app = app || {};

app.Trades = Backbone.Collection.extend({
  url: '/trades',
  model: app.Trade,
  initialize: function(){
    this.on("add", function (trade){
     var tradeView = new app.TradeView({model: trade});
     tradeView.render();
   });
    }
});
