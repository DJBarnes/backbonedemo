window.Item = Backbone.Model.extend({
  defaults : {
    'id' : null,
    'name' : '',
    'quantity' : '0',
    'description' : ''
  },

  urlRoot : 'api/items/',

  initialize : function() {
    this.on("error", function(model, error) {
      alert(error);
    })
  }
  
});

window.ItemCollection = Backbone.Collection.extend({
  model : Item,
  url : 'api/items/',
});