var app = app || {};

app.MyQuoteView = Backbone.View.extend({

  tagName: 'tr',

  events:{
      'click  .accept-quote': 'clickAcceptQuote',
      'click  .decline-quote': 'clickDeclineQuote',
      'click  .finish-quote': 'clickFinishQuote'
  },

  fetchViewAgain:function(){
    app.quotes.fetch().done(function(){
    var myQuotesView = new app.MyQuotesView({collection: app.quotes});
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

    this.fetchViewAgain();
  },

  clickFinishQuote:function(e){
    console.log(e.target);
      var reservation_id = this.model.attributes.reservation_id;
      var reservation = app.reservations.get(reservation_id);
      reservation.set({job_status:"completed"})
      reservation.save();
      this.fetchViewAgain();
  },

  clickAcceptQuote: function(e){
    console.log(e.target);
    var quotesId =  this.model.get('id');
    console.log("MODEL ID : :::::::: ",quotesId);
    var reservation_id = this.model.attributes.reservation_id;
    // console.log(, reservation_id);
    this.model.set({"status":"accepted"});
    this.model.save();

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
    var self = this;
    reservation.save();

    this.fetchViewAgain();
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
       console.log("model id: "+ thisQuoteId);

        if(reservQuoteId === thisQuoteId  ){
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
