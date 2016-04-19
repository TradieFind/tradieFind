var app = app || {};

app.TradeView = Backbone.View.extend({
  initialize:function(){

  },
  tagName: "option",
  render: function(){
    var name = this.model.get("name");
    this.$el.text(name);
    this.$el.appendTo('#tradeOptions');
  }
});
