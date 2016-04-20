var app = app || {};

app.ReservationListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showReservation'
  },

  render: function() {
    var name = this.model.attributes.first_name + " " + this.model.attributes.last_name;
    var location = this.model.attributes.location;
    var trade = this.model.attributes.trade_name;
    var time = this.model.attributes.request_time;
    var comment = this.model.attributes.comments;
    // var status = this.model.attributes.job_status;
    var user_id = this.model.attributes.user_id;

    this.$el.empty();
    this.$el.remove();

    this.$el.prepend("This User");
      this.$el.text(name + " requested a " + trade + " in " + location + " at " + time + "      ");
      this.$el.append('<span id="available-' + user_id + '"></span>');
///////////////////
    this.$el.appendTo('#user-list');

// If we want the number of tradies near them that are returned in search results
    if (users.trade == "customer"){
      app.users.fetch().done(function(){
        var numReservations = 0;
        for (var i = 0; i < app.users.models.length; i++) {
          if (app.users.models[i].attributes.id === user_id) {
            numReservations += 1;
            console.log(this);
          }
        }
      });
    };
  },

  showReservation: function() {
    app.router.navigate('reservations/' + this.model.get("id"), true);
  }

});
