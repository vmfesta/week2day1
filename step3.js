var resp = "";
var https = require('https');
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

function getAndPrintHTML (options) {


  https.get(options, function (response) {
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

getAndPrintHTML(requestOptions);