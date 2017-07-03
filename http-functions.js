var https = require('https');

module.exports = function getHTML (options, callback) {
    var resp = "";

    https.get(options, function (response) {
        response.setEncoding('utf8');

    response.on('data', function (data) {
        resp += data + "\n";
    });

    response.on('end', function() {
        callback(resp);
    });

    });
};