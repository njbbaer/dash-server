var config = require("./config");
var effects = require("./effects");
var dash_button = require("node-dash-button");

// Initalize dash buttons
var addresses = new Array;
for (var i = 0; i < config.buttons.length; i++) {
    addresses.push(config.buttons[i].mac);
}
var dash = dash_button(addresses);

// Detect button presses
dash.on("detected", function (dash_id) {
    for (var i = 0; i < config.buttons.length; i++) {
        button = config.buttons[i];
        if (button.mac === dash_id) {
            console.log(button.name, "was pressed!")
            effects[button.effect]();
        }
    }
});