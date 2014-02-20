/*global yeomanBackbone, Backbone*/

yeomanBackbone.Models = yeomanBackbone.Models || {};

(function () {
    'use strict';

    yeomanBackbone.Models.BlogModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
