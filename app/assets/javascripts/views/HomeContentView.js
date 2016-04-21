var app = app || {};

app.HomeContentView = Backbone.View.extend({


  addressType:"",
  el: '#homeContent',

  render: function() {
    $('#sub').removeClass('set-visible');
    var homeContentViewTemplate = $('#appViewTemplate').html();
    this.$el.html(appViewTemplate);
  },
});
