var request = require('request');

var config = require('./config');

// Functions triggered by buttons

exports.httpPost = function(url) {
    request.post(
        url,
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