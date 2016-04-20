var app = app || {};

app.MyQuoteView = Backbone.View.extend({

  tagName: 'tr',

  events:{
      'click  .accept-quote': 'clickAcceptQuote',
  },

  clickAcceptQuote: function(e){
    var reservation_id = this.model.attributes.reservation_id;
    var reservation = app.reservations.get(reservation_id);
    reservation.set({quote_id:reservation_id}) ;
    reservation.save();
  },

  render: function(){
    console.log("Hello");
        var td = "<td>";
        td += this.model.get("user_id");
        td += "</td><td>";
        td += this.model.get("quote_value");
        td += "</td><td>";
        td += this.model.get("start_time");
        td += "</td><td>";
        td += this.model.get("comment");
        td += "</td><td>";
        td += this.model.get("estimated_duration");
        td += "</td><td class ='accept-quote' quote_id='"+this.model.attributes.id+"'>";
        td += "Accept this Quote";
        td += "</td>";
        
      this.$el.html(td);
      this.$el.appendTo('#quotes');
  }

});
