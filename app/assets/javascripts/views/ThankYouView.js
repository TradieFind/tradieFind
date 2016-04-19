var app = app || {};

app.ThankYouView = Backbone.View.extend({

	el: '#main',

  render: function() {
		$(document).scrollTop(0);
    var thankYouViewTemplate = $('#thankYouViewTemplate').html();
		var thankYouViewHTML = _.template( thankYouViewTemplate );
    this.$el.html(thankYouViewHTML(this.model.toJSON() ));
  }
});
