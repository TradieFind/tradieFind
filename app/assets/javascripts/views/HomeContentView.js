var app = app || {};

app.HomeContentView = Backbone.View.extend({


  addressType:"",
  el: '#homeContent',

  render: function() {
    var homeContentViewTemplate = $('#appViewTemplate').html();
    this.$el.html(appViewTemplate);
  },
});
