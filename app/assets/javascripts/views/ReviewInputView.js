var app = app || {};

app.ReviewInputView = Backbone.View.extend({

  events: {
    "click button" : "createReview"
  },

  el: "#main",

  createReview: function(){
    var review = new app.Review();
    var userContent = this.$el.find("#main").val();
    review.set({
      content: userContent
    });
    review.save();
    app.reviews.add(review);
    this.$el.find("#main").val('').focus();
    // empty textarea and focus cursor on same box
  },

  render: function(){
    var reviewInputViewTemplate = $("#reviewInputViewTemplate").html();
    this.$el.html(reviewInputViewTemplate);
  }
});
