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
                element: null,
                hash: '358ed264d3b8a832b86bc4db745f182ef71bc65fd0a62dd5d760862fe1c3986b' // makerspace
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
                },

                pad: function (number, places) {
                    number = number.toString();
                    if (typeof places === 'undefined') {
                        places = 4;
                    }

                    if (number.length >= places) {
                        return number;
                    }

                    number = '0' + number;
                    return utils.pad(number, places);
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