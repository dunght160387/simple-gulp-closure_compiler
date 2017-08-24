'use strict';

function myUppercase (str) {
    return str ? str.uppercase() : str;
}

var Utils = {
    'myUppercase': myUppercase
};

module.exports = Utils;