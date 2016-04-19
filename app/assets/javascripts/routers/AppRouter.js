var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      'reservation/:id': 'showReservation',
      'confirmation': 'showConfirmed',
      'user/:id': 'showUser',
      'review/:id': 'showReview',
      'reviewinput/:id': 'reviewInput',
      'quotes': 'showQuotes',
      'contactUs': 'contactUs',
      'faq': "faq"
    },

    home: function() {
      var appView = new app.AppView();
      appView.render();
      $(".homeIndexContent").show();
    },

    showReservation: function(id) {
      var reservation = app.reservations.get(id);
      var reservationView = new app.ReservationView({model: reservation});
      app.reservation_id = id;
      reservationView.render();
      $(".homeIndexContent").hide();
    },

    showConfirmed: function() {
      var reservation = app.reservations.get(app.reservation_id);
      var confirmationView = new app.ConfirmationView({ model: reservation });
      ConfirmationView.render();
      $(".homeIndexContent").hide();
    },

    showUser: function(id) {
      var user = app.users.get(app.user_id);
      var userView = new app.UserView({model: user});
      app.user_id = id;
      userView.render();
      $(".homeIndexContent").hide();
    },

    reviewInput: function() {
      var user = app.users.get(app.user_id);
      var review = user.review;
      var reviewInputView = new app.ReviewInputView({ model: review });
      reviewInputView.render();
      $(".homeIndexContent").hide();
    },

    showReview: function(id) {
      var review = app.reviews.get(app.user_id);
      var reviewView = new app.ReviewView({model: review});
      app.user_id = id;
      reviewView.render();
      $(".homeIndexContent").hide();
    },

    showQuotes: function() {
      console.log("showQuotes: function()");
      var quoteView = new app.QuotesView();
      quoteView.render();
      $(".homeIndexContent").hide();
    },

    contactUs: function() {
      var contactUsView = new app.contactUsView();
      contactUsView.render();
      $(".homeIndexContent").hide();
    },

    faq: function() {
      var faqView = new app.FaqView();
      faqView.render();
      $(".homeIndexContent").hide();
    }

  });
