var app = app || {};

app.contactUsView = Backbone.View.extend({

el: '#main',

  render: function(){
    var contactUsViewTemplate = $('#contactUsViewTemplate').html();
    var contactUsViewHTML = _.template( contactUsViewTemplate );

    this.$el.html(contactUsViewHTML);
  }

});
