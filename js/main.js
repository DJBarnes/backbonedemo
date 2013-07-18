Backbone.View.prototype.close = function() {
  console.log('Closing view ' + this);
  if (this.beforeClose) {
    this.beforeClose();
  }
  this.remove();
  this.unbind();
}
var AppRouter = Backbone.Router.extend({
  initialize : function() {
  },

  routes : {
    "" : "list",
    "items/:id" : "itemDetails",
    "login" : "login"
  },

  list : function() {
    //debugger;
    this.authenticated(function() {
      if (app.detailView) {
        $('#detailView').slideToggle(500, function() {
          app.detailView.close();
          app.detailView = null;
        });
      } else {
        app.showHeader();
        app.getData(function() {
          $('#content').empty();
          app.showView('#content', new ItemListView({
            model : app.itemCollection
          }));
        });
      }
    });
  },

  itemDetails : function(id) {
    this.authenticated(function() {
      app.showHeader();
      app.getData(function() {
        if (!app.currentView) {
          app.showView('#content', new ItemListView({
            model : app.itemCollection
          }));
        }
        var item = app.itemCollection.get(id);
        app.toggleView(('#itemrow' + id), new ItemDetailsView({
          model : item
        }));
        console.log('ready');
      });
    });
  },

  toggleView : function(selector, view) {
    self = this;
    if (app.detailView) {
      $('#detailView').slideToggle(500, function() {
        app.detailView.close();
        $(selector).after(view.render());
        $('#detailView').slideToggle(500);
        app.detailView = view;
      });
    } else {
      $(selector).after(view.render());
      $('#detailView').slideToggle(500);
      app.detailView = view;
    }
  },

  showView : function(selector, view) {
    if (this.currentView) {
      this.currentView.close();
    }
    $(selector).append(view.render());
    this.currentView = view;
    return view;
  },

  showHeader : function() {
    if (!this.headerView) {
      this.headerView = new HeaderView({});
      this.headerView.render();
      this.footerView = new FooterView({});
      this.footerView.render();
    }
  },

  login : function() {
    this.showHeader();
    this.showView('#content', new LoginView);
  },

  authenticated : function(callback) {
    if ($.cookie('PHPSESSID')) {
      callback.call();
    } else {
      app.navigate('login', true);
    }
  },

  getData : function(callback) {
    if (!this.itemCollection) {
      this.itemCollection = new ItemCollection();
      var itemSelf = this;
      this.itemCollection.fetch({
        success : function() {
          if (callback)
            callback.call(callback);
        }
      });
    } else {
      callback.call(callback);
    }
  }
});

tpl.loadTemplates(['pageHeader', 'pageFooter', 'itemListItem', 'itemDetails', 'login'], function() {
  window.app = new AppRouter();
  Backbone.history.start();
});
