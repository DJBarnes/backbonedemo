var AppRouter = Backbone.Router.extend({
  initialize : function() {
  },
  
  routes: {
    "" : "list"
  },
  
  list : function() {
    this.headerView = new HeaderView({});
    this.headerView.render();
    this.footerView = new FooterView({});
    this.footerView.render();
    
    
  },
  
  getData: function(callback) {
    
  }
});

tpl.loadTemplates(['pageHeader','pageFooter'], function() {
  window.app = new AppRouter();
  Backbone.history.start();
});
