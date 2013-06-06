window.ItemDetailsView = Backbone.View.extend({
  tagName : 'tr',
  className: 'itemDetails',
  initialize : function() {
    this.template = _.template(tpl.get('itemDetails'));
  },
  
  render : function() {
    $(this.el).append(this.template(this.model.toJSON()));
    this.$el.children().children().hide();
    return this.el;
  }
    
});
