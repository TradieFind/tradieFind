var app = app || {};

app.ThankYouView = Backbone.View.extend({

	el: '#main',

  render: function() {
		$('#sub').removeClass('set-visible');

		this.$el.empty();
		this.$el.remove();

    var thankYouViewTemplate = $('#thankYouViewTemplate').html();
		var thankYouViewHTML = _.template( thankYouViewTemplate );
    this.$el.html(thankYouViewHTML(this));

		this.$el.appendTo(".jumbotron");
  }
});
