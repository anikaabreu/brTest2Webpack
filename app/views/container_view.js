var ImageBannerView = require('./image_banner.js');
var NameTitleView = require('./titles_names.js');
var RadioBtnView = require('./radio_btns.js');
var FooterView = require('./footerview.js');
var image_partial = require('./../partials/image_banner.hbs');


var ContainerView = Backbone.View.extend({
 tagName: "div",

   initialize: function () {
     this.listenTo(this.collection, 'reset change', this.render);
     var self = this;
     this.collection.fetch({
       reset: true
     });
   },
   render: function () {
     var self = this;

     self.collection.each(function (mod) {
       var ImgView = new ImageBannerView({
         model: mod
       });
       var NameView = new NameTitleView({
         model: mod
       });
       var BtnView = new RadioBtnView({
         model: mod
       });

       $(this.el).prepend(ImgView.render().el);
       $(this.el).prepend(NameView.render().el);
       $(this.el).prepend(BtnView.render().el);

     }, this);

     return this;
   }
  
  //  el: $('#container'),
  // initialize: function () {
  //   this.listenTo(Backbone, 'userError', this.showAlert);
  // },

  // showView: function (view) {
  //   // cleanup view
  //   if (this.subView) {
  //     this.subView.remove();
  //   }

  //   var inner = $('<div class="inner">').appendTo(this.el);
  //   view.setElement(inner).render();
  //   this.subView = view;
  // },


}); // ContainerView

module.exports = ContainerView;

