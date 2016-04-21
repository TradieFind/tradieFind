var app = app || {};

app.MyQuoteView = Backbone.View.extend({

  tagName: 'tr',

  events:{
      'click  .accept-quote': 'clickAcceptQuote',
      'click  .decline-quote': 'clickAcceptQuote',

  },

  clickAcceptQuote: function(e){
    console.log("here");
    var reservation_id = this.model.attributes.reservation_id;
    var reservation = app.reservations.get(reservation_id);

    var reservQuoteId  = reservation.get("quote_id");
    var thisQuoteId = this.model.get('id');
    if(reservQuoteId == thisQuoteId  ){
    reservation.set({job_status:"pending"});
    reservation.set({quote_id: 0});
   }else{
      reservation.set({job_status:"booked"});
      reservation.set({quote_id:reservation_id});
    }
    var self = this
    reservation.save().done(function(){
      self.$el.empty();
      self.unbind();

    });
  },

  render: function(){
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
      //
      var reservation_id = this.model.attributes.reservation_id;
      var reservation = app.reservations.get(reservation_id);
       var reservStatus =reservation.get("job_status");
       var reservQuoteId  = reservation.get("quote_id");
       var thisQuoteId = this.model.get('id');
       console.log(thisQuoteId);
       console.log(reservQuoteId);
        if(reservQuoteId == thisQuoteId  ){
         td += "</td><td class ='decline-quote' quote_id='"+this.model.attributes.id+"'>";
        td += "Decline this Quote";
        td += "</td>";
      }else{
        td += "</td><td class ='accept-quote' quote_id='"+this.model.attributes.id+"'>";
       td += "Accept this Quote";
       td += "</td>";
      }

      this.$el.html(td);
      this.$el.appendTo('#quotes');
  }

});
