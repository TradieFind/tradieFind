var app = app || {};

app.contactUsView = Backbone.View.extend({

el: '#main',

events: {
  'click button':'thankYou'
},

  render: function(){

    var contactUsViewTemplate = $('#contactUsViewTemplate').html();
    var contactUsViewHTML = _.template( contactUsViewTemplate );

    this.$el.html(contactUsViewHTML);

  },

  thankYou: function(event) {
    event.stopImmediatePropagation();
    debugger;
    if ($(".input").val() === ""){
      app.router.navigate('#thankyou', true);
    } else {
      alert("Please fill out all the fields");
    }
  }

});
