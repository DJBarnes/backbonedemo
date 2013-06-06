window.HeaderView = Backbone.View.extend({
  initialize : function() {
    this.template = _.template(tpl.get('pageHeader'));
  },
  
  render : function() {
    $('#header').empty();
    $(this.el).html(this.template());
    $('#header').html(this.el);
  },
  
  events : {
    'click .mainImage' : 'navigateToMain'
  },
  
  navigateToMain : function() {
    if (app.detailView) {
      $('#detailView').slideToggle(500, function() {
        //app.detailView.close();
        //app.detailView = null;
        app.navigate('',false);
      });
    }
  }
});
