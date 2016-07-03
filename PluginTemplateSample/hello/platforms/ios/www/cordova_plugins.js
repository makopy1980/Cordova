cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-xxxxx/www/xxxxx.js",
        "id": "cordova-plugin-xxxxx.xxxxx",
        "pluginId": "cordova-plugin-xxxxx",
        "clobbers": [
            "Xxxxx"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-plugin-xxxxx": "0.0.1"
}
// BOTTOM OF METADATA
});