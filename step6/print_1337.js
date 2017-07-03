var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(obfuscate(html));
}

getHTML(requestOptions, printUpperCase);

function obfuscate(password) {
  var obfuscated = password.replace("a","4").replace('e','3').replace('o','0').replace('s','5').replace('t','7').replace('ck','x').replace('er','or').replace('you','j00');
  return obfuscated;
}
