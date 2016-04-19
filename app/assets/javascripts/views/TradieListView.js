var app = app || {};

app.TradieListView = Backbone.View.extend({
 el: ".main",
 events: {
   'click': 'showTradie'
 },

 initialize: function(options) {
      this.options = options;
      _.bindAll(this, 'render');
  },

 render: function() {
   var appViewTemplate = $('#reviewViewTemplate').html();
   this.$el.html(appViewTemplate);
   var tradieByTrade = app.users.where({trade: this.options.inTrade});
   // var googDist = googDistance( -33.872232, 151.210164,-33.886666, 151.219605);
   var tradieSimpleDist = []
   _(tradieByTrade).each(function(t){
     distToCustomer = distanceSimple(this.options.customer_Lat,this.customer_Lon, t.lat, t.lon, "K" );
     if (distToCustomer < this.options.radius) {
       tradieSimpleDist.push(t);
     };
   });
   var addData = this.$el.find('#reviewListOfTradies');

   //Render the tradies within the radius
   _(tradieSimpleDist).each(function(t){
       strHTML = "<li><p>Full name: " + t.first_name + " " + t.last_name + "</p>"
               + "<p>Trade: " + t.trade + "</p>"
               +"<p>Company name: </p>"+ t.company_name+ "</p>"
               +"<p>Jobs completed: </p>10"+ "</p>" //get Jobs completed
               +"<p>Ratings: </p>4.2</p>"  // get Ratings
               +"<p>Comments: He's a  Chump </p>"  // Comments//
               +"<p>Distance to you: " + " </p>"  // GoogleDist//
       addData.after(strHTML);
     });

 },  //END render

 showTradie: function() {
   app.router.navigate('users/' + this.model.get("id"), true);
 }


   // var name = this.model.attributes.first_name + " " + this.model.attributes.last_name;
   // var company_name = this.model.attributes.company_name;
   // // revRating = this.model.attributes.reviews
   // // var rating = revRating.rating
   // // var avail = this.model.attributes.available
   // var tradie_id = this.model.attributes.user_id;
   //
//     this.$el.empty();
//     this.$el.remove();
//
//     this.$el.prepend("This tradie");
//       this.$el.text(name + "        " + company_name + "        " + rating + "        ");
//       this.$el.append('<span id="available-' + tradie_id + '"></span>');
// ///////////////////
//     this.$el.appendTo('#tradie-list');
//
// // If we want the number of tradies near them that are returned in search results
//     if (users.trade !== "customer"){
//       app.users.fetch().done(function(){
//         var numTradies = 0;
//         for (var i = 0; i < app.users.models.length; i++) {
//           if (app.users.models[i].attributes.id === user_id) {
//             numTradies += 1;
//           }
//         }
//
//       });
//     };




});
