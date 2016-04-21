var app = app || {};

app.contactUsView = Backbone.View.extend({

el: '#main',

events: {
  'click button':'thankYou'
},

  render: function(){
    $('#sub').removeClass('set-visible');
    var contactUsViewTemplate = $('#contactUsViewTemplate').html();
    var contactUsViewHTML = _.template( contactUsViewTemplate );

    this.$el.html(contactUsViewHTML);

  },

  thankYou: function(event) {
    event.stopImmediatePropagation();

    if ($("#inputName3").val() !== "" && $("#inputEmail3").val() !== ""){
      app.router.navigate('#thankyou', true);
    } else {
      alert("Please fill out all the fields");
      event.preventDefault();
    }
  }

});
