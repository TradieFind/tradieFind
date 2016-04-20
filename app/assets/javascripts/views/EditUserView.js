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
       user.save();

    // var userLastNameFromHTML = this.$el.find("#last_name").val();
    //   user.set({last_name: userLastNameFromHTML});
    //   user.save();
    //
    // var userEmailFromHTML = this.$el.find("#email").val();
    //   user.set({email: userEmailFromHTML});
    //   user.save();
    //
    // var userCompanyNameFromHTML = this.$el.find("#company_name").val();
    //   user.set({company_name: userCompanyNameFromHTML});
    //   user.save();
    //
    // var userTradeFromHTML = this.$el.find("#trade").val();
    //   user.set({trade: userTradeFromHTML});
    //   user.save();
    //
    // var userRateFromHTML = this.$el.find("#rate").val();
    //   user.set({rate: userRateFromHTML});
    //   user.save();
    //
    // var userPhoneNumberHTML = this.$el.find("#phone_no").val();
    //   user.set({phone_no: userPhoneNumberHTML});
    //   user.save();
    //
    // var userQualificationsHTML = this.$el.find("#qualifications").val();
    //   user.set({qualifications: userQualificationsHTML});
    //   user.save();
    //
    // var userAddressOneHTML = this.$el.find("#address_one").val();
    //   user.set({address_one: userAddressOneHTML});
    //   user.save();
    //
    // var userAddressTwoHTML = this.$el.find("#address_two").val();
    //   user.set({address_two: userAddressTwoHTML});
    //   console.log(userAddressTwoHTML);
    //   user.save();


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
