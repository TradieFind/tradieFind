var app = app || {};

app.QuotesView = Backbone.View.extend({

  tagName: "li",

  render: function (){
    // this.$el.text(name & " rows: " & this.model.get("rows") & " columns: " & this.model.get("columns"));
    this.$el.text(this.model.get("id") + " reservation_id: " + this.model.get("reservation_id") + " quote_value: " + this.model.get("quote_value"));
    this.$el.appendTo("#quoteData");
  }

});
