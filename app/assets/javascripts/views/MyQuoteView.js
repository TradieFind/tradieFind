var app = app || {};

app.MyQuoteView = Backbone.View.extend({

  tagName: 'tr',

  events:{
      'click  .accept-quote': 'clickAcceptQuote',
      'click  .decline-quote': 'clickDeclineQuote',
      'click  .finish-quote': 'clickFinishQuote'
  },

  fetchViewAgain:function(reservationID){
    app.quotes.fetch().done(function(){
      var quotesList = app.quotes.where({reservation_id:reservationID});
      var myQuotesView = new app.MyQuotesView({collection: new app.Quotes(quotesList)});
      myQuotesView.render();
     });
  },

  clickDeclineQuote: function(e){
    console.log(e.target);
    var reservation_id = this.model.attributes.reservation_id;
    var reservation = app.reservations.get(reservation_id);
    var reservQuoteId  = reservation.get("quote_id");
    var thisQuoteId = this.model.get('id');
    reservation.set({job_status:"pending"});
    reservation.set({quote_id: 0});// reservation will not have any quote
    reservation.save();

    this.model.set({"status":"notaccepted"});
    this.model.save();

    this.fetchViewAgain(reservation_id);
  },

  clickFinishQuote:function(e){
      var reservation_id = this.model.attributes.reservation_id;
      var reservation = app.reservations.get(reservation_id);
      reservation.set({job_status:"completed"})
      reservation.save();
      this.fetchViewAgain(reservation_id);
  },

  clickAcceptQuote: function(e){
    var quotesId =  this.model.get('id');
    var reservation_id = this.model.attributes.reservation_id;
    this.model.set({"status":"accepted"});
    this.model.save();


    var reservation = app.reservations.get(reservation_id);

    var reservQuoteId  = reservation.get("quote_id");
    var thisQuoteId = quotesId;
    if(reservQuoteId == thisQuoteId  ){
    reservation.set({job_status:"pending"});
    reservation.set({quote_id: 0});
   }else{
      reservation.set({job_status:"booked"});
      reservation.set({quote_id:reservation_id});
    }
    reservation.save();

    this.fetchViewAgain(reservation_id);
  },

  render: function(){
        var td = "<td>";
        td += this.model.get("id");
        td += "</td><td>";
        td += this.model.get("reservation_id");
        td += "</td><td>";
        td += this.model.get("user_id");
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

        var quoteStatus = this.model.get("status");

        //if(reservQuoteId === thisQuoteId  ){

        if(quoteStatus === 'accepted'){
         td += "</td><td class ='decline-quote' quote_id='"+this.model.get('id')+"'>";
        td += "Decline";
        td += "</td>";
        td += "</td><td class ='finish-quote' quote_id='"+this.model.get('id')+"'>";
       td += "Completed";
       td += "</td>";
      }else{
        td += "</td><td class ='accept-quote' quote_id='"+this.model.get('id')+"'>";
       td += "Accept this Quote";
       td += "</td>";
      }


      //this.$el.class = "rownumber";
      this.$el.html(td);
      this.$el.appendTo('#quotes');
  }

});
