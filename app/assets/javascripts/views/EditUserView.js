var app = app || {};

app.EditUserView = Backbone.View.extend({

el: '#main',

  render: function(){
    var editUserViewTemplate = $('#editUserViewTemplate').html();
    var editUserViewHTML = _.template( editUserViewTemplate );

    this.$el.html(editUserViewHTML);
  }

});
