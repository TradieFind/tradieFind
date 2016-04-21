var app = app || {};

app.ConfirmationView = Backbone.View.extend({

el: '#main',

  render: function() {
    $('#sub').removeClass('set-visible');
    var confirmationViewTemplate = $('#confirmationViewTemplate').html();
    var confirmationViewHTML = _.template( confirmationViewTemplate );

    this.$el.html( confirmationViewHTML(this.model.toJSON() ));

  }

});
