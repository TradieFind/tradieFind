var app = app || {};

app.PaymentView = Backbone.View.extend({

el: '#main',

events: {
  'click button':'processPayment'
},

  render: function(){

    this.$el.empty();
    this.$el.remove();
    $('#sub').removeClass('set-visible');
    var paymentViewTemplate = $('#paymentViewTemplate').html();
    var paymentViewHTML = _.template( paymentViewTemplate );

    this.$el.html(paymentViewHTML);

    this.$el.appendTo('.jumbotron');
  },

  processPayment: function(event) {
    event.stopImmediatePropagation();
    console.log("You will be taken to the payment window")

  }

});
