var app = app || {};

app.JobSearchView = Backbone.View.extend({
 el: "#main",

  events: {
  //  'click #searchButton' : 'searchForFlights',
  //  'keypress textarea' : 'checkForEnterSearchFlights',
   'click li.book_link' : 'makeReservation',
   'click td.jobs_link' : 'showJobs'
  },

  initialize: function(options) {
      this.options = options;
      this.render();
  },


  render: function() {
    // console.log( localStorage.getItem( 'currentLoc' )  );

    //var appViewTemplate = $('#reviewViewTemplate').html();
    //this.$el.after(appViewTemplate);
    this.$('#reviewViewTemplate').remove();
    var appViewTemplate = $('#JobViewListAllTemplate').html();
    this.$el.append(appViewTemplate);
    // console.log(this.options.inTrade);
    // console.log(this.options.radius);
    var jobList = app.reservations.where({trade_name: this.options.inTrade});
    // console.log("XXXXXXYYYYYY");
    // console.log(jobList);
    // console.log(jobList);
    var jobsSimpleDist = []
    var self = this;
    asdf=0;
    _(jobList).each(function(j){

      asdf=asdf+1;
      // console.log("jjjjjjjjjjj");
      // console.log(j);
      var jobCust = app.users.where({id: j.attributes.user_id});

      // var JobSearchView  =new  app.JobSearchView({"tradie_Lat":td_Lat,
      //                            "tradie_Lon":td_Lon,
      //                              "inTrade": thisUser[0].attributes.trade,
      //                             "radius": radius } );
      //
      // console.log("XXXXXXXXXX");
      // console.log(jobCust);
      console.log(parseFloat(self.options.td_Lat));
                       console.log(parseFloat(self.options.td_Lon));
                       console.log(parseFloat(jobCust[0].attributes.lat));
                       console.log(parseFloat(jobCust[0].attributes.lon) );

      var distToJob = distanceSimple(parseFloat(self.options.td_Lat),
                      parseFloat(self.options.td_Lon),
                      parseFloat(parseFloat(jobCust[0].attributes.lat)),
                      parseFloat(parseFloat(jobCust[0].attributes.lon)), "K" );
     if (distToJob < parseFloat(self.options.radius)) {
       jobsSimpleDist.push(j);
     };
    });
    console.log("jsdjsd");
    console.log(jobsSimpleDist);


    //Render the tradies within the radius
    var jobCust =[];
    var tag_count = 0;
    _(jobsSimpleDist).each(function(j){
      var jobCust = app.users.where({id: j.attributes.user_id});
      console.log("dddddddddddd");
      console.log(jobCust);
      //add to Map
      console.log("a");
      console.log(parseFloat(jobCust[0].attributes.lat));
      console.log('b');
      console.log(parseFloat(jobCust[0].attributes.lon));
      console.log("c");
      console.log(jobCust[0].attributes.first_name);
      showTradies(parseFloat(jobCust[0].attributes.lat),parseFloat(jobCust[0].attributes.lon),jobCust[0].attributes.first_name);
      //need to calculate average rating
      // var reviews_t = app.reviews.where({reviewee_id: t.attributes.id});
      // rating_t = "No reviews";
      // console.log(reviews_t.length);
      // console.log(reviews_t.length > 0);
      // if (reviews_t.length > 0) {
      //   var rating_t = 0;
      //   var denom = 0;
      //    _(reviews_t).each(function(r){
      //      denom = denom + 1;
      //      rating_t += r.attributes.rating;
      //   });
      //    rating_t = Number((rating_t / denom).toFixed(1));
      // };
      //render each tradie to the table '#reviewListOfTradies'
       var strHTML = "<tr><td>" + jobCust[0].attributes.first_name + " " + jobCust[0].attributes.last_name + "</td>"
               + "<td>" + j.attributes.locations + "</td>"
               + "<td>" + j.attributes.comments + "</td>"
               + "<td>" + j.attributes.request_time+ "</td>"  // get Ratings
               + "<td id='goog_ref_" + tag_count + "'></td>"
               + "<td class='jobs_link' data-r='" + j.attributes.id + "'>Click to Quote</td></tr>" ; // GoogleDist//

      $('#reviewListOfJobs').append(strHTML);
      var tag_ref = "goog_ref_"+tag_count;
      console.log("tag_ref");
      console.log(tag_ref);
      googDistance( parseFloat(self.options.td_Lat),
                    parseFloat(self.options.td_Lon),
                    parseFloat(jobCust[0].attributes.lat),
                    parseFloat(jobCust[0].attributes.lon),
                    tag_ref );
      tag_count = tag_count + 1;
     });
 },  //END render



  showJobs: function(passingTD) {

    // var tradieID =  parseInt(passingTD.currentTarget.attributes[1].value);
    // var appViewTemplate = $("#TradieListViewInfo").html();
    // this.$el.append(appViewTemplate);
    //
    // var t = app.users.findWhere({id: tradieID});
    // var strHTML
    //         =
    //          "<div class='well well-lg' >"
    //         + "<h4>Profile</h4>"
    //         + "<ul style='list-style: none;'>"
    //         + "<li>Name: " + t.attributes.first_name + " " + t.attributes.last_name + "</li>"
    //         + "<li>" + t.attributes.company_name + "</li>"
    //         + "<li> 1000 </li>" //get Jobs completed
    //         + "<li>"  +  "</li>"  // get Ratings
    //         + "<li >Additional Instructions</li>" + "<input id='Add_info' type='text' />"
    //         + "<li class='book_link' data-r='" + tradieID + "'>Click to Book</button></li>"
    //         + "</ul>"
    //         + "</div>"; // GoogleDist//
    // $('#TradieListViewDetails').html(strHTML);
  }, //END showTradie



  makeReservation: function(passingLi) {
    // var newRes = new app.Reservation();
    // var tradieID =  parseInt(passingLi.currentTarget.attributes[1].value);
    // var cust = app.users.findWhere({id: app.current_user});
    // var addressOfCustomer = cust.attributes.address_one+", "+cust.attributes.address_two;
    // var t = app.users.findWhere({id: tradieID});
    // var tradeType = t.attributes.trade;
    // var commentsTxt = $('#Add_info').val();
    // newRes.set({
    //   user_id: app.current_user,
    //   location: addressOfCustomer,
    //   trade_name: tradeType,
    //   request_time:  Date("Fri Mar 25 2015 09:56:24"),
    //   comments: commentsTxt,
    //   job_status: "booked"
    // });
    // newRes.save();
    // passingLi.toElement.textContent = "BOOKED";
    // passingLi.toElement.style.pointerEvents = "none"
  } //END makeReservations
});
