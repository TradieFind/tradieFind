var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#search',
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
    trades = tradesfield.value;
  },


  //
  quotesList : function (){
    var appViewTemplate = $("#quotesViewTemplate").html();
    this.$el.html(appViewTemplate);
    // var appViewTemplate = $("#anotherTemplate").html();
    // this.$el.append(appViewTemplate);
    var appViewTemplate = $("#searchContentTemplate").html();
    this.$el.append(appViewTemplate);
    var list_quotesView = new app.AeroplaneSearchView({collection: app.quotes});
    QuotesView.renderList();
    // this.buttonClicks();

    }



});
