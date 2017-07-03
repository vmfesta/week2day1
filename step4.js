var https = require('https');
function getHTML (options, callback) {
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
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions,printHTML);