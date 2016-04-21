var app = app || {};

app.ReviewInputView = Backbone.View.extend({

  events: {
    "click .submit" : "createReview"
  },

  el: "#main",

  createReview: function(passingTD){
    var revieweeID =  parseInt(passingTD.currentTarget.attributes[1].value);
    var review = new app.Review();
    var userContent = this.$el.find("#main").val();
    var t = app.users.findWhere({id: revieweeID});
    review.set({
      reviewer_id: app.current_user,
      reviewee_id: t,
      rating: rating,
      comment: commentsTxt
    });
    review.save();

    app.reviews.add(review);
    this.$el.find("#main").val('').focus();
    passingTD.toElement.textContent = "WrittenReview";
    passingTD.toElement.style.pointerEvents = "none"
    // empty textarea and focus cursor on same box

  },

  render: function(){
    $('#sub').removeClass('set-visible');
    var reviewInputViewTemplate = $("#reviewInputViewTemplate").html();
    this.$el.html(reviewInputViewTemplate);
  }
});
