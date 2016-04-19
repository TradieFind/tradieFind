var app = app || {};

app.TradieListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showTradie'
  },

  render: function() {
    var name = this.model.attributes.first_name + " " + this.model.attributes.last_name;
    var company_name = this.model.attributes.company_name;
    // revRating = this.model.attributes.reviews
    // var rating = revRating.rating
    // var avail = this.model.attributes.available
    var tradie_id = this.model.attributes.user_id;

    this.$el.empty();
    this.$el.remove();

    this.$el.prepend("This tradie");
      this.$el.text(name + "        " + company_name + "        " + rating + "        ");
      this.$el.append('<span id="available-' + tradie_id + '"></span>');
///////////////////
    this.$el.appendTo('#tradie-list');

// If we want the number of tradies near them that are returned in search results
    if (users.trade !== "customer"){
      app.users.fetch().done(function(){
        var numTradies = 0;
        for (var i = 0; i < app.users.models.length; i++) {
          if (app.users.models[i].attributes.id === user_id) {
            numTradies += 1;
          }
        }

      });
    };
  },

  showTradie: function() {
    app.router.navigate('users/' + this.model.get("id"), true);
  }

});
