var app = app || {};

app.AppView = Backbone.View.extend({


  addressType:"",
  el: '#main',
  events: {
    'click #currentAddress':'checkbox_CA_Clicked',
    'click #homeAddress':'checkbox_HA_Clicked',
    'click #homeSearchSubmit':'createSearch'
  },

  checkbox_CA_Clicked:function(e){
    $('#cust_location_label').text("Looking for your current Location");
    findCurrentLoc();

    // getPlaceNearby();
    this.addressType = e.target.id;
  },

  checkbox_HA_Clicked:function(e){
    this.addressType = e.target.id;
  },

  createSearch: function(event) {
    event.preventDefault();
    if (this.addressType === 'currentAddress'){
       this.createHash();
    }else if(this.addressType === 'homeAddress'){
      this.createHash();
    }else{
        alert("please choose an address");
    }
  },

  createHash: function(){
    var radius = $('#distance').val();
    var inTrade= $('#tradeOptions option:selected').val();
    var thisUser = app.users.where({id: app.current_user});
    if (this.addressType === 'homeAddress') {
      var customer_Lat = thisUser[0].attributes.lat;
      var customer_Lon = thisUser[0].attributes.lon;
    }
    else if (this.addressType === 'currentAddress') {
      cLocData = JSON.parse(localStorage.getItem( 'currentLoc'));
      var customer_Lat = cLocData.lat;
      var customer_Lon = cLocData.lon;
    }
    else {
      alert("please choose an address");
    }
    //var tradieListViewOld = app.TradieListView.render(customer_Lat, customer_Lon, inTrade, radius );
    var tradieListView =new  app.TradieListView({"customer_Lat":customer_Lat,
                               "customer_Lon":customer_Lon,
                                "inTrade": inTrade,
                                "radius": radius } );
  },

  renderTradeList:function(){

  this.model.each(function(model){
      var tradeView = new app.TradeView({model: model});
     tradeView.render();
  });
},

  render: function() {
    localStorage.setItem( 'currentLoc', "" );
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html(appViewTemplate);
    this.renderTradeList();
  }
});
