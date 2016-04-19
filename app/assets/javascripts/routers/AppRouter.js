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
    },

    showReservation: function(id) {
      var reservation = app.reservations.get(id);
      var reservationView = new app.ReservationView({model: reservation});
      app.reservation_id = id;
      reservationView.render();
    },

    showConfirmed: function() {
      var reservation = app.reservations.get(app.reservation_id);
      var confirmationView = new app.ConfirmationView({ model: reservation });
      ConfirmationView.render();
    },

    showUser: function(id) {
      var user = app.users.get(app.user_id);
      var userView = new app.UserView({model: user});
      app.user_id = id;
      userView.render();
    },

    reviewInput: function() {
      var user = app.users.get(app.user_id);
      var review = user.review;
      var reviewInputView = new app.ReviewInputView({ model: review });
      reviewInputView.render();
    },

    showReview: function(id) {
      var review = app.reviews.get(app.user_id);
      var reviewView = new app.ReviewView({model: review});
      app.user_id = id;
      reviewView.render();
    },

    showQuotes: function() {
      console.log("showQuotes: function()");
      var quoteView = new app.QuotesView();
      quoteView.render();
    },

    contactUs: function() {
      var contactUsView = new app.contactUsView();
      contactUsView.render();
    },

    faq: function() {
      var faqView = new app.FaqView();
      faqView.render();
    }

  });
