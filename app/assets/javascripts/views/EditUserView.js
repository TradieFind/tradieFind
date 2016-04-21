var app = app || {};

$(document).ready(function(){


  app.EditUserView = Backbone.View.extend({
    initialize: function(options){
      this.options = options;
    },
  el: '#main',

  events: {
    "click #saveEditUser": "saveUser"
  },

  saveUser: function(){
    var user = app.users.get(app.current_user);
    var userFirstNameFromHTML = this.$el.find("#first_name").val();
       user.set({first_name: userFirstNameFromHTML});


    var userLastNameFromHTML = this.$el.find("#last_name").val();
      user.set({last_name: userLastNameFromHTML});


    var userEmailFromHTML = this.$el.find("#email").val();
      user.set({email: userEmailFromHTML});


    var userCompanyNameFromHTML = this.$el.find("#company_name").val();
      user.set({company_name: userCompanyNameFromHTML});


    var userTradeFromHTML = this.$el.find("#trade").val();
      user.set({trade: userTradeFromHTML});


    var userRateFromHTML = this.$el.find("#rate").val();
      user.set({rate: userRateFromHTML});


    var userPhoneNumberHTML = this.$el.find("#phone_no").val();
      user.set({phone_no: userPhoneNumberHTML});


    var userQualificationsHTML = this.$el.find("#qualifications").val();
      user.set({qualifications: userQualificationsHTML});


    var userAddressOneHTML = this.$el.find("#address_one").val();
      user.set({address_one: userAddressOneHTML});


    var userAddressTwoHTML = this.$el.find("#address_two").val();
      user.set({address_two: userAddressTwoHTML});
      console.log(userAddressTwoHTML);
      console.log(userAddressOneHTML);
      user.save();


  },

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
