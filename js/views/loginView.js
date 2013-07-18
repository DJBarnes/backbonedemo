window.LoginView = Backbone.View.extend({
  tagName : 'div',
  className: 'login',
  initialize: function() {
    this.template = _.template(tpl.get('login'));
  },
  
  render : function() {
    $(this.el).empty();
    $(this.el).html(this.template());
    return this.el;
  },
  
  events : {
    'click .login' : 'userLogin' 
  },
  
  userLogin : function(e) {
    var username = $('input#username').val();
    var password = $.md5($('input#password').val());
    
    $.ajax({
      data : {'Username' : username, 'Password' : password},
      url : 'api/login/',
      'type' : 'POST',
    }).success(function(data) {
      if(data === "1") {
        app.navigate('',true);
      } else {
        alert('Username and Password are incorrect');
      }
    });
    e.preventDefault();
  }
});