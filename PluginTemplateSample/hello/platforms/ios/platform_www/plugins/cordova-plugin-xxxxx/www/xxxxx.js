cordova.define("cordova-plugin-xxxxx.xxxxx", function(require, exports, module) { /*global cordova, module*/

module.exports = {
    hello: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Xxxxx", "hello", [name]);
    },
    logSample: function (successCallback, errorCallback) {
    	cordova.exec(successCallback, errorCallback, "Xxxxx", "logSample", []);
    }
};

});
