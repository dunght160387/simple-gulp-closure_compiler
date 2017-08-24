'use strict';

var Utils = require('../3rd-party/utils');

var DEBUG = $$DEBUG$$;

/**
 * @param {Object} attributes
 * @constructor
 */
var MyApp = function(attributes) {
    // A list of attributes getable and setable.
    this.attributes_ = {
        'attr_string' : 'attr_string_default',
        'attr_number' : 256,
        'attr_bool' : false
    };
};

/**
 * Html template
 */
MyApp.HTML_TEMPLATE = ''
    + '<html>'
    + '<head>'
    + '    <title>Test</title>'
    + '</head>'
    + '<body>'
    + '    <div>'
    + '        <img src="loading" alt="loading icon"/>'
    + '    </div>'
    + ''
    + '    <div style="width:100%; height:100%;">'
    + '        <div id="myapp-id" style="height:100%; text-align: center;">'
    + '        </div>'
    + '    </div>'
    + '</body>'
    + '</html>';

/**
 * @param {string} message
 */
MyApp.prototype.run = function(message) {
    DEBUG && console.log('[MyApp] run...');

    var myAppElId = 'myapp-id';
    var myAppEl = document.getElementById(myAppElId);
    if (!myAppEl) {
        DEBUG && console.log('[MyApp] run... not found myApp element with id #' + myAppElId);
        return;
    }

    DEBUG && console.log('[MyApp] run... building content...');
    var contents = '';
    contents += 'Your message: ' + message;
    contents += '<br>';
    contents += 'current attributes: ' + this.attributes_['attr_string'] + ' - ' + this.attributes_['attr_string'] + ' - ' + this.attributes_['attr_string'];

    myAppEl.innerHTML = Utils.myUppercase(contents);

    DEBUG && console.log('[MyApp] run... finished');
};

module.exports = MyApp;