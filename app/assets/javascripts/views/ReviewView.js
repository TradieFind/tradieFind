var app = app || {};

app.ReviewView = Backbone.View.extend({

	el: '#main',

  render: function() {
		$(document).scrollTop(0);
    var reviewViewTemplate = $('#reviewViewTemplate').html();
		var reviewViewHTML = _.template( reviewViewTemplate );
    this.$el.html(reviewViewHTML(this.model.toJSON() ));
  }
});
