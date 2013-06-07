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
    app.navigate('',true);
  }
});
