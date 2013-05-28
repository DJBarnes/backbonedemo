window.ItemListView = Backbone.View.extend({
  tagName : 'p',
  className: 'itemTable',
  initialize: function() {
    
  },
  render : function() {
    $('#content').empty();
    $(this.el).empty();
    
    $(this.el).html(JSON.stringify(this.model.models));
    $('#content').html(this.el);
  }
});
