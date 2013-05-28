var AppRouter = Backbone.Router.extend({
  initialize : function() {
  },

  routes : {
    "" : "list"
  },

  list : function() {
    this.getData(function() {
      this.headerView = new HeaderView({});
      this.headerView.render();
      this.footerView = new FooterView({});
      this.footerView.render();
      /*this.itemListView = new ItemListView({
       model : app.itemCollection
       });
       this.itemListView.render();
       */
    });
  },

  getData : function(callback) {
    var itemSelf = this;
    $.ajax({
      'url' : 'api/items/'
    }).success(function(data) {
      itemSelf.ajaxItemC = data;
      $('#content').html('<p>' + itemSelf.ajaxItemC + '</p>');
      if (callback)
        callback.call(itemSelf);
    });
    /*
     this.itemCollection = new ItemCollection();

     var itemSelf = this;

     this.itemCollection.fetch({
     success : function() {
     if (callback)
     callback.call(itemSelf);
     }
     });
     */
  }
});

tpl.loadTemplates(['pageHeader', 'pageFooter'], function() {
  window.app = new AppRouter();
  Backbone.history.start();
});
