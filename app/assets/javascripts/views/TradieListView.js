var app = app || {};

app.TradieListView = Backbone.View.extend({
 el: "#main",

  events: {
  //  'click #searchButton' : 'searchForFlights',
  //  'keypress textarea' : 'checkForEnterSearchFlights',
   'click li.book_link' : 'makeReservation',
   'click td.tradie_link' : 'showTradie'
  },

  initialize: function(options) {
      this.options = options;
      this.render();
  },



  render: function() {
    //var appViewTemplate = $('#reviewViewTemplate').html();
    //this.$el.after(appViewTemplate);
    this.$('#reviewViewTemplate').remove();
    var appViewTemplate = $('#TradieListViewListAllTemplate').html();
    this.$el.append(appViewTemplate);
    var tradieByTrade = app.users.where({trade: this.options.inTrade});
       console.log(app.users);
    var tradieSimpleDist = []
    var self = this;
    _(tradieByTrade).each(function(t){

     distToCustomer = distanceSimple(parseFloat(self.options.customer_Lat),
                      parseFloat(self.options.customer_Lon),
                      parseFloat(t.attributes.lat),
                      parseFloat(t.attributes.lon), "K" );
     if (distToCustomer < parseFloat(self.options.radius)) {
       tradieSimpleDist.push(t);
     };
    });

    //Render the tradies within the radius
    var tag_count = 0;
    _(tradieSimpleDist).each(function(t){
      //need to calculate average rating
      var reviews_t = app.reviews.where({reviewee_id: t.attributes.id});
      if (reviews_t) {
        var rating_t = 0;
        var denom = 0;
         _(reviews_t).each(function(r){
           denom = denom + 1;
           rating_t += r.attributes.rating;
        });
         rating_t = Number((rating_t / denom).toFixed(1));
      };
      //render each tradie to the table '#reviewListOfTradies'
       var strHTML = "<tr><td>" + t.attributes.first_name + " " + t.attributes.last_name + "</td>"
               + "<td>" + t.attributes.company_name+ "</td>"
               + "<td>1000 </td>" //get Jobs completed
               + "<td>" + rating_t +  "</td>"  // get Ratings
               + "<td id='goog_ref_" + tag_count + "'></td>"
               + "<td class='tradie_link' data-r='" + t.attributes.id + "'>Click to View</td></tr>" ; // GoogleDist//

              //  strRowColHTML +=
              //    "</td><td data-r='" + i +"' data-c='" + j+ "' data-f='"
              //    + flightId + "' style='pointer-events: none; cursor: default;'>"+tmpName;


      $('#reviewListOfTradies').append(strHTML);
      var tag_ref = "goog_ref_"+tag_count;
      googDistance( parseFloat(self.options.customer_Lat),
                    parseFloat(self.options.customer_Lon),
                    parseFloat(t.attributes.lat),
                    parseFloat(t.attributes.lon),
                    tag_ref );
      tag_count = tag_count + 1;
     });
 },  //END render



  showTradie: function(passingTD) {
    var tradieID =  parseInt(passingTD.currentTarget.attributes[1].value);
    var appViewTemplate = $("#TradieListViewInfo").html();
    this.$el.append(appViewTemplate);

    var t = app.users.findWhere({id: tradieID});
    var strHTML
            = "<li>Name:" + t.attributes.first_name + " " + t.attributes.last_name + "</li>"
            + "<li>" + t.attributes.company_name + "</li>"
            + "<li>1000 </li>" //get Jobs completed
            + "<li>"  +  "</li>"  // get Ratings
            + "<li >Additional Instructions</li>" + "<input id='Add_info' type='text' />"
            + "<li class='book_link' data-r='" + tradieID + "'>Click to Book</li>" ; // GoogleDist//
    $('#TradieListViewDetails').append(strHTML);
  }, //END showTradie



  makeReservation: function(passingLi) {
    var newRes = new app.Reservation();
    var tradieID =  parseInt(passingLi.currentTarget.attributes[1].value);
    var cust = app.users.findWhere({id: app.current_user});
    var addressOfCustomer = cust.attributes.address_one+", "+cust.attributes.address_two;
    var t = app.users.findWhere({id: tradieID});
    var tradeType = t.attributes.trade;
    var commentsTxt = $('#Add_info').val();
    newRes.set({
     user_id: app.current_user,
     location: addressOfCustomer,
     trade_name: tradeType,
     request_time:  Date("Fri Mar 25 2015 09:56:24"),
     comments: commentsTxt,
     job_status: "booked"
    });
    newRes.save();
    passingLi.toElement.textContent = "BOOKED";
    passingLi.toElement.style.pointerEvents = "none"
  } //END makeReservations
});
