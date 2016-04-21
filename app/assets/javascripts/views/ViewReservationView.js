var app = app || {};

app.ViewReservationView = Backbone.View.extend({

  tagName: 'tr',

  className: 'sub',

  events:{
      'click  .view-quotes-list': 'clickViewQuotes',
      'click  .write-a-review': 'clickReview',
      'click  .relist-job': 'clickRelistJob'
  },


  clickRelistJob:function(e){
    console.log(this.model);
     this.model.set({"quote_id":0});
     this.model.set({"job_status":"pending"});
     this.model.save();


  },

  clickReview:function(e){
     var quote_id = this.model.get("quote_id");

     var quote = app.quotes.get(quote_id);

     quoteMaker = quote.get('user_id');
     console.log(quoteMaker);

     app.router.navigate("#reviewinput", true);
  },

  clickViewQuotes: function(e){
    //$(e.target.parentNode).addClass('success');
      //console.log(e.currentTarget.attributes["reservation-id"].value);
      var reservationID = parseInt(e.currentTarget.attributes["reservation-id"].value);
      //app.reservationID = reservationID;
      // var quotesViewTemplate = $('#quotesViewTemplate').html();
      // this.$el.append(quotesViewTemplate);
      var quotesList = app.quotes.where({reservation_id:reservationID});
      var myQuoteView = new app.MyQuotesView({collection: new app.Quotes(quotesList)});
      myQuoteView.render();

  },

  colorReservationRow: function(){
    var reservationID = parseInt(e.currentTarget.attributes["reservation-id"].value);

    if(this.model.get("job_status") === 'booked'){
      $(".sub").addClass('success');
    }else {
      $(".sub").addClass('danger');
    }
  },

  render: function(){

    var userID = this.model.get("user_id");
    if( userID === app.current_user){
        var td = "<td>";
        // li += this.model.get("user_id");
        // li += "</td><td>";
        td += this.model.get("id");
        td += "</td><td>";
        td += this.model.get("user_id");
        td += "</td><td>";
        td += this.model.get("quote_id");
        td += "</td><td>";
        td += this.model.get("trade_name");
        td += "</td><td>";
        td += this.model.get("job_status");

        if(this.model.get("job_status")==='completed'){
          td += "</td><td class ='write-a-review' reservation-id='"+this.model.attributes.id+"'>";
          td += "Write Review";
          td += "</td>";
          td += "</td><td class ='relist-job' reservation-id='"+this.model.attributes.id+"'>";
          td += "Relist-job";
          td += "</td>";
        }else{
        td += "</td><td class ='view-quotes-list' reservation-id='"+this.model.attributes.id+"'>";
        td += "View Quotes";
        td += "</td>";
      }


      this.$el.html(td);
      this.$el.appendTo('#reservations');
    }
  }

});
