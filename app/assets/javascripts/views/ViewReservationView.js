var app = app || {};

app.ViewReservationView = Backbone.View.extend({

  tagName: 'tr',

  className: 'sub',

  events:{
      'click  .view-quotes-list': 'clickReservation',
  },

  clickReservation: function(e){
    $(e.target.parentNode).addClass('success');
      console.log(e.currentTarget.attributes["reservation-id"].value);
      var reservationID = parseInt(e.currentTarget.attributes["reservation-id"].value);
      app.reservationID = reservationID;
      // var quotesViewTemplate = $('#quotesViewTemplate').html();
      // this.$el.append(quotesViewTemplate);
      var quotesList = app.quotes.where({reservation_id:reservationID});
      console.log(quotesList);
      var myQuoteView = new app.MyQuotesView({model: quotesList});
      myQuoteView.render();

  },

  render: function(){

    var userID = this.model.get("user_id");
    if( userID === app.current_user){
        var td = "<td>";
        // li += this.model.get("user_id");
        // li += "</td><td>";
        td += this.model.get("comments");
        td += "</td><td>";
        td += this.model.get("location");
        td += "</td><td>";
        td += this.model.get("trade_name");
        td += "</td><td>";
        td += this.model.get("job_status");
        td += "</td><td class ='view-quotes-list' reservation-id='"+this.model.attributes.id+"'>";
        td += "View Quotes";
        td += "</td>";





      this.$el.html(td);
      this.$el.appendTo('#reservations');
    }
  }

});
