var app = app || {};

app.ArchiveView = Backbone.View.extend({


  el: '#main',

    render: function(){
      $('#sub').removeClass('set-visible');
      var archiveViewTemplate = $('#archiveViewTemplate').html();
      var archiveViewHTML = _.template( archiveViewTemplate );

      this.$el.html(archiveViewHTML);
    }

  });
