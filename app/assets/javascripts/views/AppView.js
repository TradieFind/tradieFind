var app = app || {};

app.AppView = Backbone.View.extend({


  addressType:"",
  el: '#main',
  events: {
    'click #currentAddress':'checkbox_CA_Clicked',
    'click #homeAddress':'checkbox_HA_Clicked',
    'click #currentTDAddress':'checkbox_TDCA_Clicked',
    'click #homeTDAddress':'checkbox_TDHA_Clicked',
    'click #homeSearchSubmit':'createSearch'
  },

  checkbox_CA_Clicked:function(e){
    //$('#cust_location_label').html('<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw margin-bottom"></i>');
    $('#cust_location_label').html('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw margin-bottom"></i><span>Looking for your current Location</span>');
    findCurrentLoc();
    // getPlaceNearby();
    this.addressType = e.target.id;
  },

  checkbox_HA_Clicked:function(e){
    var thisUser = app.users.where({id: app.current_user});
    console.log(thisUser[0].attributes.lat);
    console.log(thisUser[0].attributes.lon);
    renderMap(thisUser[0].attributes.lat, thisUser[0].attributes.lon,false);
    $('#cust_location_label').text(Number(thisUser[0].attributes.lat.toFixed(3)) + ", " + Number(thisUser[0].attributes.lon.toFixed(3)));
    $('#cust_location_label2').text(thisUser[0].attributes.address_one + ", " + thisUser[0].attributes.address_two);
    this.addressType = e.target.id;
  },

  checkbox_TDCA_Clicked:function(e){
    //$('#cust_location_label').html('<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw margin-bottom"></i>');
    $('#cust_ocation_label').html('<i class="fa fa-circle-o-notch fa-spin fa-1x fa-fw margin-bottom"></i><span>Looking for your current Location</span>');
    findCurrentLoc();
    // getPlaceNearby();
    this.addressType = e.target.id;
  },

  checkbox_TDHA_Clicked:function(e){
    var thisUser = app.users.where({id: app.current_user});
    console.log(thisUser[0].attributes.lat);
    console.log(thisUser[0].attributes.lon);
    renderMap(thisUser[0].attributes.lat, thisUser[0].attributes.lon,false);
    $('#cust_ocation_label').text(Number(thisUser[0].attributes.lat.toFixed(3)) + ", " + Number(thisUser[0].attributes.lon.toFixed(3)));
    $('#cust_ocation_label2').text(thisUser[0].attributes.address_one + ", " + thisUser[0].attributes.address_two);
    this.addressType = e.target.id;
  },

  createSearch: function(event) {
    event.preventDefault();
    if (user === undefined || user.attributes.trade === "customer")
    {
       this.createHash();
    }
    else {
      this.createTDHash();
    }
  },

  createHash: function(){
    this.$('#TradieListTable').remove();
    var appViewTemplate = $('#TradieListTable').html();
    this.$el.append(appViewTemplate);

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

  createTDHash: function(){

    this.$el.remove('#JobViewTable');
    var appViewTemplate = $('#JobViewTable').html();
    this.$el.append(appViewTemplate);

    var radius = $('#distance').val();
    var thisUser = app.users.where({id: app.current_user});
    if (this.addressType === 'homeTDAddress') {
      var td_Lat = thisUser[0].attributes.lat;
      var td_Lon = thisUser[0].attributes.lon;
    }
    else if (this.addressType === 'currentTDAddress') {
      cLocData = JSON.parse(localStorage.getItem( 'currentLoc'));
      var td_Lat = cLocData.lat;
      var td_Lon = cLocData.lon;
    }
    else {
      alert("please choose an address");
    }


    //var tradieListViewOld = app.TradieListView.render(customer_Lat, customer_Lon, inTrade, radius );
    var JobSearchView  =new  app.JobSearchView({"td_Lat":td_Lat,
                               "td_Lon":td_Lon,
                                 "inTrade": thisUser[0].attributes.trade,
                                "radius": radius } );
  },


  renderTradeList:function(){
    this.model.each(function(model){
      var tradeView = new app.TradeView({model: model});
      tradeView.render();
    });
  },

  render: function() {
    user = app.users.get(app.current_user);

    localStorage.setItem( 'currentLoc', "" );
    if (user === undefined || user.attributes.trade === "customer"){
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html(appViewTemplate);
    var appViewTemplate = $('#TradieListViewListAllTemplate').html();
    this.$el.append(appViewTemplate);
    this.renderTradeList();
  } else {
    localStorage.setItem( 'currentLoc', "" );
    var appTradieViewTemplate = $('#appTradieViewTemplate').html();
    this.$el.html(appTradieViewTemplate);
    var appViewTemplate = $('#JobViewListAllTemplate').html();
    this.$el.append(appViewTemplate);
    this.renderTradeList();
  };
  }

});
