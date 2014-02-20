/*global yeomanBackbone, Backbone, JST*/

yeomanBackbone.Views = yeomanBackbone.Views || {};

(function () {
    'use strict';

    yeomanBackbone.Views.BlogView = Backbone.View.extend({

        template: JST['app/scripts/templates/blog.ejs']

    });

})();
