var request = require('request');

var config = require('./config');

// Functions triggered by buttons

exports.postSleep = function() {
    request.post(
        config.urls.sleep,
        function (error, response, body) {
            console.log('Response:', response.statusCode)
        }
    );
}

exports.printTest1 = function() {
    console.log('Test 1')
}

exports.printTest2 = function() {
    console.log('Test 2')
}