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
  },
  
  events : {
    'click #save' : 'saveData'
  },
  
  saveData : function() {
    this.model.set({
      'name':$('#nameTextbox').val(),
      'quantity':$('#quantityTextbox').val(),
      'description':$('#descriptionTextarea').val()
    });
    console.log(this.model);
    this.model.save();
    app.navigate("",true);
  }
    
});
