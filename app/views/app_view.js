var template = require('./../templates/home.hbs');
var ContainerView = require('./views/container_view.js');

var AppView = Backbone.View.extend({


  initialize: function (options) {
    this.options = options;
    this.showView()
  },

  render: function () {
    this.$el.html(template());
    return this;
  },

  showView(view) {
    view.render(ContainerView);
  }
});


module.exports = AppView;