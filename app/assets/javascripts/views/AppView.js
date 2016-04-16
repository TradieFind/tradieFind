var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',
  events: {
    'click #searchSubmit': 'createSearch'
  },
  render: function() {
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html(appViewTemplate);
  },

  // Function associated with the search click that
  // logs the values entered initially and prevents the
  // page from being refreshed.
  createSearch: function(event) {
    event.preventDefault();
    place = parseInt(placefield.value);
    date = datefield.value;

// Below test the search fields upon submit for similar db
// results and then renders the appropriate results accordingly.





    // Removes the previous list of results and renders the new
    // according the the above parameters.

    var searchSort = [];
    var searchDates =[];

    for (var i = 0; i < search.length; i++) {
        searchDates.push(search[i].attributes.date_time);
      }

    searchDates = searchDates.sort();

    for (var x = 0; x < searchDates.length; x++) {
        for (var y = 0; y < search.length; y++) {
            if (search[y].attributes.date_time === searchDates[x]) {
              searchSort.push(search[y]);
            }
        }
    }
    this.$el.find('li').remove();
    this.$el.find('ul').remove();


  
});
