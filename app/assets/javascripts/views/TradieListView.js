var app = app || {};

app.TradieListView = Backbone.View.extend({
 el: "#main",

 events: {
  //  'click #searchButton' : 'searchForFlights',
  //  'keypress textarea' : 'checkForEnterSearchFlights',
  //  'change #searchFrom' : 'loadDestinations',
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
    console.log(passingTD.currentTarget.attributes[1].value);
    var tradieID =  parseInt(passingTD.currentTarget.attributes[1].value);
    var appViewTemplate = $("#TradieListViewInfo").html();
    this.$el.append(appViewTemplate);

    var t = app.users.findWhere({id: tradieID});
    console.log(t);

    console.log(t);
    var strHTML
            = "<li>Name:" + t.attributes.first_name + " " + t.attributes.last_name + "</li>"
            + "<li>" + t.attributes.company_name + "</li>"
            + "<li>1000 </li>" //get Jobs completed
            + "<li>"  +  "</li>"  // get Ratings
            + "<li>" + "'></li>"
            + "<li class='book_link' data-r='" + t.tradieID + "'>Click to Book</li>" ; // GoogleDist//
    $('#TradieListViewDetails').append(strHTML);
  }
});
//

//
//
//
//
//  var app = app || {};
//
//  app.ReservationsView  = Backbone.View.extend({
//
//    el: ".main",
//
//    events: {
//      'click #searchButton' : 'searchForFlights',
//      'keypress textarea' : 'checkForEnterSearchFlights',
//      'change #searchFrom' : 'loadDestinations',
//      'click td' : 'testFn'
//    },
//
//    initialize: function () {
//      console.log("INIT app.ReservationsView ");
//    },
//
//    testFn: function(x) {
//      var row = x.currentTarget.attributes[0].value;
//      var col = x.currentTarget.attributes[1].value;
//      var flightId = x.currentTarget.attributes[2].value;
//      var currentUserId = 99;
//      var resName = app.users.returnUserName(currentUserId);
//      var newRes = new app.Reservation();
//      var resStatus = app.reservations.alreadyTaken3(row,col,flightId);
//      if (resStatus  != "_NO_RESULT_") {
//
//        newRes.set({
//          user_id: currentUserId,
//          flight_id: flightId,
//          row: row,
//          col: col
//        });
//        newRes.save();
//        x.toElement.textContent = resName;
//        x.toElement.style.pointerEvents = "none"
//      } else
//      {
//        alert("Sorry this seat has been booked");
//        x.toElement.style.pointerEvents = "none"
//        console.log("XXXXXXXXXX  " +resStatus);
//        x.toElement.textContent = app.users.returnUserName(resStatus);
//      }
//    },
//
//    renderReservations : function (flightId) {
//
//      app.users.returnUserName(1);
//      var strRowColHTML ='<table class="reservation_content_table">';
//      this.$("#reservationContentTable").remove();
//      var appViewTemplate = $("#reservationContentTemplate").html();
//      this.$el.append(appViewTemplate);
//      var x =this.$el;
//      // app.flights.fetch().done(function() {
//        var flight = app.flights.get(flightId).attributes;
//
//        var plane  = app.aeroplanes.get(flight["aeroplane_id"]).attributes;
//        var columns = plane.columns;
//        var rows = plane.rows;
//        if (rows > 0) {
//          for (var i = 0; i <= rows; i++) {
//            if (columns > 0) {
//              //add <TD> elements for each column
//              for (var j = 0; j <= columns; j++) {
//                if (i===0) { //Head of each column will be labled A, B, C...
//                  if (j===0) {
//                    strRowColHTML += "<tr><td style='pointer-events: none; cursor: default;'>LOO";
//                  }
//                  else {
//                    strRowColHTML += "</td><td style='pointer-events: none; cursor: default;'>"+String.fromCharCode((64+j));
//                  }
//                }
//                else {
//                  if (j===0) {
//                    strRowColHTML += "<tr><td style='pointer-events: none; cursor: default;'>"+i;
//                  }
//                  else {
//                      var ResID = app.reservations.alreadyTaken2(i,j,flightId);
//                      var tmpName = app.users.returnUserName(ResID);
//                      if (ResID != "_NO_RESULT_") {
//                        strRowColHTML +=
//                          "</td><td data-r='" + i +"' data-c='" + j+ "' data-f='"
//                          + flightId + "' style='pointer-events: none; cursor: default;'>"+tmpName;
//                      }
//                      else {
//                        strRowColHTML +=
//                              "</td><td data-r='" + i +"' data-c='" + j+ "' data-f='"
//                              + flightId + "'>"+String.fromCharCode(745);
//                      }
//                  }
//                }
//              }
//              strRowColHTML += "</tr>";
//            }
//          }
//          strRowColHTML += "</tr></table>";
//        }
//        // strRowColHTML += "";
//        var addRows = x.find("#planeRowContent");
//        x.append(strRowColHTML);
//      // });
//    },
//
//    loadDestinations: function() {
//      //Clear destinations drop-down
//      var select = document.getElementById("searchTo");
//      var length = select.options.length;
//      for (i = 0; i < length; i++) {
//        select.options[i] = null;
//      }
//      //Populate departure drop-down
//      var airports = [];
//      varOrigin = $('#searchFrom').val();
//      this.collection.each(function(f) {
//        if (varOrigin === f.attributes.origin) {
//          airports.push(f.attributes.destination);
//        }
//      });
//      //Populate destination drop-down
//      var $searchTo = $('#searchTo');
//      airports.forEach(function(airport) {
//        var $option = $('<option/>').text(airport).val(airport);
//        $searchTo.append($option);
//      });
//    },
//
//    //Listen for ENTER keypress
//    checkForEnterSearchFlights: function (event) {
//      app.ENTER_KEY = 13;
//      if (event.which === app.ENTER_KEY && !event.shiftKey) {
//        event.preventDefault();
//        this.searchForFlights();
//      }
//    },
//
//    //Create a new aeroplane from data entered on screen
//    searchForFlights: function () {
//      this.$("#searchContentTable").remove();
//      var appViewTemplate = $("#searchContentTemplate").html();
//      this.$el.append(appViewTemplate);
//      var fromAirport = this.$el.find("#searchFrom").val();
//      var toAirport = this.$el.find("#searchTo").val();
//      var searchResults = "";
//      var x =this.$el;
//      this.collection.each(function(f) {
//        if (f.attributes.origin === fromAirport
//          && f.attributes.destination === toAirport) {
//          var plane = app.aeroplanes.get(f.attributes.aeroplane_id ).attributes;
//          var planeName = plane.name;
//          var searchResults = "<td>" + f.attributes.date + "</td><td><a href='#flights/" + f.attributes.id + "'>" + f.attributes.id + "</a></td><td>" + f.attributes.origin + "/" + f.attributes.destination + "</td><td>" + planeName+ "</td>";
//          $('#searchContentTable').append(searchResults);
//        }
//      });
//    }
//  });
//
//    // var name = this.model.attributes.first_name + " " + this.model.attributes.last_name;
//    // var company_name = this.model.attributes.company_name;
//    // // revRating = this.model.attributes.reviews
//    // // var rating = revRating.rating
//    // // var avail = this.model.attributes.available
//    // var tradie_id = this.model.attributes.user_id;
//    //
// //     this.$el.empty();
// //     this.$el.remove();
// //
// //     this.$el.prepend("This tradie");
// //       this.$el.text(name + "        " + company_name + "        " + rating + "        ");
// //       this.$el.append('<span id="available-' + tradie_id + '"></span>');
// // ///////////////////
// //     this.$el.appendTo('#tradie-list');
// //
// // // If we want the number of tradies near them that are returned in search results
// //     if (users.trade !== "customer"){
// //       app.users.fetch().done(function(){
// //         var numTradies = 0;
// //         for (var i = 0; i < app.users.models.length; i++) {
// //           if (app.users.models[i].attributes.id === user_id) {
// //             numTradies += 1;
// //           }
// //         }
// //
// //       });
// //     };
//
//
//
//
// });
