var app = app || {};

app.PolicyView = Backbone.View.extend({


  el: '#main',

    render: function(){
      $('#sub').removeClass('set-visible');
      var policyViewTemplate = $('#policyViewTemplate').html();
      var policyViewHTML = _.template( policyViewTemplate );

      this.$el.html(policyViewHTML);
    }

  });
