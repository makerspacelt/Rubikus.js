/*
 * Rubikus.js
 *
 * Copyright 2013, Karolis Grinkus - http://kartais.lt
 *
 * Github: https://github.com/makerspacelt/Rubikus.js
 */

(function (undefined) {
    'use strict';
    var Rubikus = Rubikus || function (userOpts) {
        var settings = {
                element: null
            },

            utils = {
                extend: function (destination, source) {
                    for (var property in source) {
                        if (source[property] && source[property].constructor && source[property].constructor === Object) {
                            destination[property] = destination[property] || {};
                            utils.extend(destination[property], source[property]);
                        } else {
                            destination[property] = source[property];
                        }
                    }
                    return destination;
                }
            },

            init = function (opts) {
                utils.extend(settings, opts);
            };

        init(userOpts);
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Rubikus;
    }

    if (typeof ender === 'undefined') {
        this.Rubikus = Rubikus;
    }

    if (typeof define === "function" && define.amd) {
        define('Rubikus', [], function () { 
            return Rubikus; 
        });
    }
}).call(this);