var app = app || {};

app.ViewReservationView = Backbone.View.extend({

  tagName: 'tr',

  render: function(){
    var userID = this.model.get("user_id");
    if( userID === app.current_user){
        var li = "<td>";
        li += this.model.get("user_id");
        li += "</td><td>";
        li += this.model.get("comments");
        li += "</td><td>";
        li += this.model.get("location");
        li += "</td><td>";
        li += this.model.get("trade_name");
        li += "</td><td>";
        li += this.model.get("job_status");
        li += "</td>";

      this.$el.html( li);
      this.$el.appendTo('#reservations');
    }
  }

});
