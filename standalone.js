/*
 *
 * This is used to build the bundle with browserify.
 *
 */
var ReactGooglebot = require('./');

if (typeof global.window.define == 'function' && global.window.define.amd) {
    global.window.define('ReactGooglebot', function () { return ReactGooglebot; });
} else if (global.window) {
    global.window.ReactGooglebot = ReactGooglebot;
}

var gb = new ReactGooglebot();

gb.bootstrap();