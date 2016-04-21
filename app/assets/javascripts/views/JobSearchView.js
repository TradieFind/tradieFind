var app = app || {};

app.JobSearchView = Backbone.View.extend({
 el: "#main",

  events: {
   'click li.book_link' : 'makeQuote',
  //  'click li.book_link' : 'remove',
   'click td.jobs_link' : 'showJobs'
  //  'click td.jobs_link' : 'remove'
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
    var jobList = app.reservations.where({trade_name: this.options.inTrade, job_status: 'Pending'});
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
      // console.log(parseFloat(self.options.td_Lat));
      //                  console.log(parseFloat(self.options.td_Lon));
      //                  console.log(parseFloat(jobCust[0].attributes.lat));
      //                  console.log(parseFloat(jobCust[0].attributes.lon) );

      var distToJob = distanceSimple(parseFloat(self.options.td_Lat),
                      parseFloat(self.options.td_Lon),
                      parseFloat(parseFloat(jobCust[0].attributes.lat)),
                      parseFloat(parseFloat(jobCust[0].attributes.lon)), "K" );
     if (distToJob < parseFloat(self.options.radius)) {
       jobsSimpleDist.push(j);
     };
    });
    // console.log("jsdjsd");
    // console.log(jobsSimpleDist);


    //Render the tradies within the radius
    var jobCust =[];
    var tag_count = 0;
    _(jobsSimpleDist).each(function(j){
      var jobCust = app.users.where({id: j.attributes.user_id});
      // console.log("dddddddddddd");
      // console.log(jobCust);
      // //add to Map
      // console.log("a");
      // console.log(parseFloat(jobCust[0].attributes.lat));
      // console.log('b');
      // console.log(parseFloat(jobCust[0].attributes.lon));
      // console.log("c");
      // console.log(jobCust[0].attributes.first_name);
      showTradies(parseFloat(jobCust[0].attributes.lat),parseFloat(jobCust[0].attributes.lon),jobCust[0].attributes.first_name);
       var strHTML = "<tr><td>" + jobCust[0].attributes.first_name + " " + jobCust[0].attributes.last_name + "</td>"
               + "<td>" + j.attributes.location + "</td>"
               + "<td>" + j.attributes.comments + "</td>"
               + "<td>" + j.attributes.request_time+ "</td>"  // get Ratings
               + "<td id='goog_ref_" + tag_count + "'></td>"
               + "<td class='jobs_link' data-r='" + j.attributes.id + "'>Click to Quote</td></tr>" ; // GoogleDist//

      $('#reviewListOfJobs').append(strHTML);
      var tag_ref = "goog_ref_"+tag_count;
      // console.log("tag_ref");
      // console.log(tag_ref);
      googDistance( parseFloat(self.options.td_Lat),
                    parseFloat(self.options.td_Lon),
                    parseFloat(jobCust[0].attributes.lat),
                    parseFloat(jobCust[0].attributes.lon),
                    tag_ref );
      tag_count = tag_count + 1;
     });
 },  //END render



  showJobs: function(x) {
    console.log(x.currentTarget.attributes[1].value);
    console.log("clicked");
    // QUOTE STATUS: notaccepted  || accepted
    var resID =  parseInt(x.currentTarget.attributes[1].value);
    var appViewTemplate = $("#JobViewInfo").html();
    this.$el.append(appViewTemplate);
    var r = app.reservations.findWhere({id: resID});
    var strHTML
            =
             "<div class='well well-lg' >"
            + "<h4>Job details and Quote</h4>"
            + "<ul style='list-style: none;'>"
            + "<li >Quote fee</li>" + "<input id='quote_value' type='text' />"
            + "<li >Start time</li>" + "<input id='start_time' type='text' />"
            + "<li >Estimated duration</li>" + "<input id='estimate_duration' type='text' />"
            + "<li >Comments</li>" + "<input id='comment' type='text' />"
            + "<li class='book_link' data-r='" + resID + "'>Click to submit Quote</button></li>"
            + "</ul>"
            + "</div>"; // GoogleDist//
    $('#JobViewDetails').html(strHTML);
  }, //END showJobs



  makeQuote: function(passingLi) {
    console.log("xe,kasdf");
    var newQ = new app.Quote();

    var resID =  parseInt(passingLi.currentTarget.attributes[1].value);
    // var tradieID = app.users.findWhere({id: app.current_user});
    newQ.set({
      reservation_id: resID,
      user_id: app.current_user,
      quote_value: $('#quote_value').val(),
      comment: $('#comment').val(),
      start_time: $('#start_time').val(),
      estimate_duration: $('#estimate_duration').val(),
      status: 'pending'
    });
    newQ.save();
    passingLi.toElement.textContent = "QUOTE SENT";
    passingLi.toElement.style.pointerEvents = "none"

  } //END makeReservations
});
