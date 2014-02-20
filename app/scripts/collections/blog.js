/*global yeomanBackbone, Backbone*/

yeomanBackbone.Collections = yeomanBackbone.Collections || {};

(function () {
    'use strict';

    yeomanBackbone.Collections.BlogCollection = Backbone.Collection.extend({

        model: yeomanBackbone.Models.BlogModel

    });

})();
