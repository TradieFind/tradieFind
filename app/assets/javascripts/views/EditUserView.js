var app = app || {};

$(document).ready(function(){

  app.EditUserView = Backbone.View.extend({
    initialize: function(options){
      this.options = options;
    },
  el: '#main',

    render: function(){
      var editUserViewTemplate = $('#editUserViewTemplate').html();
      var editUserViewHTML = _.template( editUserViewTemplate );
      this.$el.html(editUserViewHTML);
      var thisUser = app.users.where({id: app.current_user});
      first_name: thisUser.attributes.eu_firstName.html();
      // var thisUser = app.users.where({id: app.current_user});
      //  first_name: thisUser.attributes.eu_firstName
    }

  });
})
