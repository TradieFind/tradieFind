var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      'reservation/:id': 'showReservation',
      'reservationlist/:id': 'showResList',
      'confirmation': 'showConfirmed',
      'user': 'showUser',
      'user/:id': 'showUser',
      'review/:id': 'showReview',
      'reviewinput/:id': 'reviewInput',
      'quotes': 'showQuotes',
      'addquote': 'addQuote',
      'contactUs': 'contactUs',
      'thankyou': 'thankYou',
      'edituser': 'editUser',
      'policy': 'policy',
      'archive': 'archive',
      'faq': "faq",
      'reservations/:id': 'showReservations'
    },
    
showReservations:function(id){
    //var reservations = app.reservations.get({"user_id": 1});
    //var reservations = app.reservations.where({"user_id": app.current_user});
    //console.log(reservations);
    var viewReservationsView = new app.ViewReservationsView({model: app.reservations});
    viewReservationsView.render();
    },

    home: function() {
      var trades = app.trades;
      var appView = new app.AppView({model: trades});
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

    showResList: function(id) {
      var resList = app.reservations.get(id);
      var resListView = new app.ResListView({ model: reservation });
      app.reservation_id = id;
      resListView.render();
      $(".homeIndexContent").hide();
    },

    showConfirmed: function() {
      var reservation = app.reservations.get(app.reservation_id);
      var confirmationView = new app.ConfirmationView({ model: reservation });
      ConfirmationView.render();
      $(".homeIndexContent").hide();
    },

    showUser: function(id) {
      if (!id){
        id = app.current_user;
      }
      var user = app.users.get(id);
      var userView = new app.UserView({model: user});

      userView.render();
      $(".homeIndexContent").hide();
    },

    editUser: function(id) {
      var user = app.users.get(app.user_id);
      var editUserView = new app.EditUserView({ model: user });
      app.user_id = id;
      editUserView.render();
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

    thankYou: function() {
      var thankYouView = new app.ThankYouView();
      thankYouView.render();
      $(".homeIndexContent").hide();
    },

    addQuote: function(id) {
      if (!id) {
        id = app.current_user
      }
      var user = app.users.get(id);
      var addQuoteView = new app.AddQuoteView();
      addQuoteView.render();
      $(".homeIndexContent").hide();
    },

    policy: function() {
      var policyView = new app.PolicyView();
      policyView.render();
      $(".homeIndexContent").hide();
    },

    archive: function() {
      var archiveView = new app.ArchiveView();
      archiveView.render();
      $(".homeIndexContent").hide();
    },

    faq: function() {
      var faqView = new app.FaqView();
      faqView.render();
      $(".homeIndexContent").hide();
    }

  });
