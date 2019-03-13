var Handlebars = require('handlebars-template-loader/runtime');
// import Handlebars from 'handlebars-template-loader/runtime'
var image_partial = require('./../partials/image_banner.hbs');
Handlebars.registerPartial('image_partial', image_partial);


var ImageBannerView = Backbone.View.extend({
    tagName: "li",
    className: "repo",
    template: image_partial,
    render: function () {
        self = this;
        //    for (i in this.model.attributes) {
        //        var minN = Infinity;
        //        var attr = this.model.attributes[i]
        //        var price = attr["sailing_options"]

        //        for (key in price) {
        //            var p = price[key]["sailing_price"]
        //            if (p < minN) minN = p;
        //        }

        //        var minP = {
        //            img: attr["sailing_main_image"],
        //            id: attr["sailing_id"],
        //            min: minN
        //        }

        //        console.log(minP)
        //        var bannerPrice = JSON.stringify(minP)

        //        // console.log(bannerPrice)
        //        this.$el.append(this.template({ img: bannerPrice }));
        //        // console.log('a', attr)
        //    }

        //   var img = JSON.stringify(this.model.get("sailing_main_image"))
        //   console.log(this.model.get("sailing_main_image"))
        self.$el.html(
            this.template(image_partial)
            // '<b>' + this.model.get("sailing_main_image") + "</b> - " + this.model.get("sailing_options")
            //minP
        );

        return this;
    }
});

 module.exports = ImageBannerView;
