var resp = "";
var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

  
  response.on('data', function (data) {
    resp += data + "\n";
  });

  response.on('end', function() {
    console.log(resp);
    console.log('Response stream complete.');
  });
  });
  
}


getAndPrintHTML();