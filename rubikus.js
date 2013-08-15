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
                canvas: null,
                hash: '358ed264d3b8a832b86bc4db745f182ef71bc65fd0a62dd5d760862fe1c3986b' // makerspace
            },
            hash,
            cache = {},
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
                },

                drawSingleCube: function (which) {
                    var x = Math.floor(which / 16),
                        y = Math.floor((which - x * 16) / 4),
                        z = which - x * 16 - y * 4,
                        hex = parseInt(hash[which], 16),
                        bin = utils.pad(hex.toString(2)),
                        halfX = cache.width / 2,
                        halfY = cache.height / 2,
                        midX = 4 * halfX - halfX * x + halfX * y,
                        midY = 4 * cache.height + halfY * (x + y) - cache.height * z,
                        ctx = settings.canvas.getContext('2d'),
                        colour = {
                            top: '#ff0',
                            left: '#0ff',
                            right: '#f0f'
                        };

                    if ((hex < 2) || (hex > 11)) {
                        ctx.beginPath();
                        ctx.fillStyle = colour.top;
                        ctx.moveTo(midX, midY);
                        ctx.lineTo(midX - halfX, midY - halfY);
                        ctx.lineTo(midX, midY - cache.height);
                        ctx.lineTo(midX + halfX, midY - halfY);
                        ctx.fill();
                        ctx.lineWidth = 1; ctx.strokeStyle = colour.top; ctx.closePath(); ctx.stroke();

                        ctx.beginPath();
                        ctx.fillStyle = colour.left;
                        ctx.moveTo(midX, midY);
                        ctx.lineTo(midX - halfX, midY - halfY);
                        ctx.lineTo(midX - halfX, midY - halfY + cache.height);
                        ctx.lineTo(midX, midY + cache.height);
                        ctx.fill();
                        ctx.lineWidth = 1; ctx.strokeStyle = colour.left; ctx.closePath(); ctx.stroke();

                        ctx.beginPath();
                        ctx.fillStyle = colour.right;
                        ctx.moveTo(midX, midY);
                        ctx.lineTo(midX + halfX, midY - halfY);
                        ctx.lineTo(midX + halfX, midY - halfY + cache.height);
                        ctx.lineTo(midX, midY + cache.height);
                        ctx.fill();
                        ctx.lineWidth = 1; ctx.strokeStyle = colour.right; ctx.closePath(); ctx.stroke();
                    }
                }
            },

            drawAllCubes = function () {
                for (var i = 0; i < hash.length; i += 1) {
                    utils.drawSingleCube(i);
                }
            },

            init = function (opts) {
                utils.extend(settings, opts);

                hash = settings.hash.split('');
                cache.width = Math.floor(settings.canvas.offsetWidth / 4);
                cache.height = Math.floor(cache.width / Math.sqrt(3));

                drawAllCubes();
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