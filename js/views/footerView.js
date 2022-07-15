window.FooterView = Backbone.View.extend({
  initialize : function() {
    this.template = _.template(tpl.get('pageFooter'));
  },

  render : function() {
    $('#footer').empty();
    $(this.el).html(this.template());
    $('#footer').html(this.el);
  },

  events : {
    'click .github' : 'navigateToGithub',
    'click .backbone' : 'navigateToBackbone'
  },

  navigateToGithub : function() {
    window.location = 'https://github.com/DJBarnes/'
  },

  navigateToBackbone : function() {
    window.location = 'https://backbonejs.org/'
  }
});