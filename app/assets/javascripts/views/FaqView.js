var app = app || {};

app.FaqView = Backbone.View.extend({

el: '#main',

  render: function(){
    $('#sub').removeClass('set-visible');
    var faqViewTemplate = $('#faqViewTemplate').html();
    var faqViewHTML = _.template( faqViewTemplate );

    this.$el.html(faqViewHTML);
  }

});
