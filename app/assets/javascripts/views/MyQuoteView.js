var app = app || {};

app.MyQuoteView = Backbone.View.extend({

  tagName: 'tr',

  events:{
      'click   td.accept-quote': 'clickAcceptQuote',
      'click  td.decline-quote': 'clickDeclineQuote',
      'click  td.finish-quote': 'clickFinishQuote',
      'click td.completed-quote': 'clickPayButton'
  },

  cleanUpClasses:function(){
    $( ".accept-quote" ).removeClass( "finish-quote" );
    $( ".accept-quote" ).removeClass( "completed-quote" );
    $( ".completed-quote" ).removeClass( "finish-quote" );
    $( ".completed-quote" ).removeClass( "accept-quote" );
    $( ".finish-quote" ).removeClass( "accept-quote" );
    $( ".finish-quote" ).removeClass( "completed-quote" );
    $( ".decline-quote row" ).removeClass( "finish-quote" );
    $( ".decline-quote row" ).removeClass( "completed-quote" );
  },

  clickPayButton: function(){
    //app.router.navigate("/charges/new", true);
    // this.redirectTo('http://localhost:3000/charges/new');
      $(document).ready( function() {
      url = "/charges/new";
      $( location ).attr("href", url);
    });
  },

  fetchViewAgain:function(reservationID){
    app.quotes.fetch().done(function(){
      var quotesList = app.quotes.where({reservation_id:reservationID});
      var myQuotesView = new app.MyQuotesView({collection: new app.Quotes(quotesList)});
      myQuotesView.render();
     });
  },

  clickDeclineQuote: function(e){
    this.cleanUpClasses();
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
    this.cleanUpClasses();
    console.log(e.target);
      var reservation_id = this.model.attributes.reservation_id;
      var reservation = app.reservations.get(reservation_id);
      reservation.set({job_status:"completed"})
      reservation.save();
      this.fetchViewAgain(reservation_id);
  },

  clickAcceptQuote: function(e){
    this.cleanUpClasses();
    // var quoteID =  parseInt(e.currentTarget.attributes[1].value);

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
    var userId = this.model.get("user_id")
    var userModel = app.users.findWhere({id: userId});
    var FName = userModel.get('first_name');
    var SName = userModel.get('last_name')
    var username = FName +" "+ SName;


        var td = "<td>";
        td += username;
        td += "</td><td>";
        td += this.model.get("quote_value");
        td += "</td><td>";
        td += this.model.get("estimated_duration");
        td += "</td><td>";
        td += this.model.get("comment");
      //
        var reservation_id = this.model.attributes.reservation_id;
        var reservation = app.reservations.get(reservation_id);
        var reservStatus =reservation.get("job_status");
        var reservQuoteId  = reservation.get("quote_id");
        var thisQuoteId = this.model.get('id');

        var quoteStatus = this.model.get("status");

        //if(reservQuoteId === thisQuoteId  ){

        if(reservStatus === 'booked'){

         td += "</td><td class ='decline-quote row'  quote_id='"+this.model.get('id')+"'>";
        //  $( ".decline-quote row" ).removeClass( "finish-quote" );
        //  $( ".decline-quote row" ).removeClass( "completed-quote" );
        td += "Decline";
        td += "</td>";
        td += "</td><td class ='finish-quote' quote_id='"+this.model.get('id')+"'>";
       td += "Completed";
       td += "</td>";
      //  $( ".finish-quote" ).removeClass( "accept-quote" );
      //  $( ".finish-quote" ).removeClass( "completed-quote" );
     }else if(reservStatus ==='completed'){
       td += "</td><td class ='completed-quote' quote_id='"+this.model.get('id')+"'>";
       td += "Pay";
       td += "</td>";
      //  $( ".completed-quote" ).removeClass( "finish-quote" );
      //  $( ".completed-quote" ).removeClass( "accept-quote" );

     }else if(reservStatus ==='pending'){
        td += "</td><td class ='accept-quote' quote_id='"+this.model.get('id')+"'>";
       td += "Accept this Quote";
       td += "</td>";
      //  $( ".accept-quote" ).removeClass( "finish-quote" );
      //  $( ".accept-quote" ).removeClass( "completed-quote" );
      }


      //this.$el.class = "rownumber";
      this.$el.html(td);
      this.$el.appendTo('#quotes');
  }

});
