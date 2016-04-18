var app = app || {};

app.AppView = Backbone.View.extend({


  addressType:"",
  el: '#main',
  events: {
    'click #currentAddress':'checkboxClicked',
    'click #homeAddress':'checkboxClicked',
    'click #homeSearchSubmit':'createSearch'
  },

  checkboxClicked:function(e){
    this.addressType = e.target.id;
  },

  createSearch: function(event) {
    event.preventDefault();
    if (this.addressType === 'currentAddress'){
       alert("feature in development")
    }else if(this.addressType === 'homeAddress'){
      this.createHash();
    }else{
        alert("please choose an address");
    }
  },

  createHash: function(){
     
  },

  render: function() {
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html(appViewTemplate);
  },

  // Function associated with the search click that
  // logs the values entered initially and prevents the
  // page from being refreshed.


});
