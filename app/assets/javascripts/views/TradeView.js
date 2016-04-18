var app = app || {};

app.TradeView = Backbone.View.extend({
  initialize:function(){
    console.log("here");
  },
  tagName: "option",
  render: function(){
    var name = this.model.get("name");
    this.$el.text(name);
    this.$el.appendTo("#options");
  }
});
