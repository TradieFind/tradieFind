var app = app || {};

app.UserView = Backbone.View.extend({
  el:'#main',
  tagName: 'div',
  events: {
    'click': 'getInContact'
  },
  render: function() {
    $('#sub').removeClass('set-visible');
    // If we add trade type into the model we can distinguish tradies and general users
    // var full_name = this.model.attributes.first_name + " " + this.model.attributes.last_name;
    // var email = this.model.attributes.email;
    // var trade = this.model.attributes.trade;
    // var company_name = this.model.attributes.company_name;
    // var rate = this.model.attributes.rate;
    // var phone_number = this.model.attributes.phone_no;
    // var qualifications = this.model.attributes.qualifications;
    // var address_one = this.model.attributes.address_one;
    // var address_two = this.model.attributes.address_two;

    // this.$el.empty();
    // this.$el.remove();

    var userViewTemplate = $('#userViewTemplate').html();
		var userViewHTML = _.template( userViewTemplate );

    this.$el.html(userViewHTML(this.model.toJSON() ));

    this.$el.appendTo(".jumbotron");
  },

  getInContact: function(e){
    e.stopImmediatePropagation();
    app.router.navigate('users/' + this.model.get("id"), true);
  }

});
