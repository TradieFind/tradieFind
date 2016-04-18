var app = app || {};

app.Reviews = Backbone.Collection.extend({
  url: '/reviews',
  model: app.Review
});
