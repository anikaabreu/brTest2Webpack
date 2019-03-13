var ContainerView = Backbone.View.extend({
   el: $('#container'),
  initialize: function () {
    this.listenTo(Backbone, 'userError', this.showAlert);
  },

  showView: function (view) {
    // cleanup view
    if (this.subView) {
      this.subView.remove();
    }

    var inner = $('<div class="inner">').appendTo(this.el);
    view.setElement(inner).render();
    this.subView = view;
  },


}); // ContainerView

module.exports = ContainerView;

