var AppView = require('./views/app_view.js');

var App = {
  router: {},
  init: function() {  

    var appView = new AppView();
    appView.render();

  }
};

App.init();

