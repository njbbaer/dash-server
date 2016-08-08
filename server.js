var nodeDashButton = require('node-dash-button');

var config = require('./config');
var effects = require('./effects');

// Initalize dash buttons
var addresses = new Array;
for (var i = 0; i < config.buttons.length; i++) {
    addresses.push(config.buttons[i].mac);
}
var dash = nodeDashButton(addresses);

// Detect button presses
dash.on('detected', function detectDash(dashId) {
    for (var i = 0; i < config.buttons.length; i++) {
        button = config.buttons[i];
        if (button.mac === dashId) {
            console.log(button.name, 'was pressed!')
            effects[button.effect]();
        }
    }
});