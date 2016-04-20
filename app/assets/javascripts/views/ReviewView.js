var app = app || {};

app.ReviewView = Backbone.View.extend({

	el: '#main',

  render: function() {

		this.$el.empty();
		this.$el.remove();

    var reviewViewTemplate = $('#reviewViewTemplate').html();
		var reviewViewHTML = _.template( reviewViewTemplate );
    this.$el.html(reviewViewHTML(this.model ));


		this.$el.appendTo(".jumbotron");
  }
});
