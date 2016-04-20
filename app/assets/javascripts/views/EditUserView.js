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
      console.log('rendering', this.model.toJSON())
      this.$el.html(editUserViewHTML(this.model.toJSON()));
      // var thisUser = app.users.where({id: app.current_user});
      // eu_firstName = thisUser.$el.attributes.first_name.html();
      // var thisUser = app.users.where({id: app.current_user});
      //  first_name: thisUser.attributes.eu_firstName
    }

  });
})
