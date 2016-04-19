var app = app || {};

app.TradieListView = Backbone.View.extend({
 el: "#main",
 events: {
   'click': 'showTradie'
 },

 initialize: function(options) {
      this.options = options;
      this.render();
  },

 render: function() {

   var appViewTemplate = $('#reviewViewTemplate').html();
   this.$el.after(appViewTemplate);
   var tradieByTrade = app.users.where({trade: this.options.inTrade});
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

  //  var addData = this.$el.find('#reviewListOfTradies');

   //Render the tradies within the radius
   var tag_count = 0;
   _(tradieSimpleDist).each(function(t){
       var strHTML = "<tr><td>" + t.attributes.first_name + " " + t.attributes.last_name + "</td>"
               + "<td>" + t.attributes.company_name+ "</td>"
               +"<td>1000 </td>" //get Jobs completed
               +"<td>4.2</td>"  // get Ratings
               +"<td>He's a  Chump </td>"  // Comments//
               +"<td id='goog_ref_" + tag_count + "'></td></tr>"  // GoogleDist//
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
