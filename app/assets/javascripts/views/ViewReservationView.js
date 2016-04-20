var app = app || {};

app.ViewReservationView = Backbone.View.extend({

  tagName: 'tr',

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
        td += "</td>";

        console.log("Model Id of my Reservation" + this.model.get('id'));


      this.$el.html(td);
      this.$el.appendTo('#reservations');
    }
  }

});
