tpl = {
  templates : {},
  
  loadTemplates : function(names, callback) {
    var self = this;
    
    var loadTemplate = function(index) {
      var name = names[index];
      $.get('tpl/' + name + '.html', function(data) {
        self.templates[name] = data;
        index++;
        if (index < names.length) {
          loadTemplate(index);
        } else {
          callback();
        }
      });
    }
    loadTemplate(0);
  },
  
  get : function(name) {
    return this.templates[name];
  }
};
