var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

function file_toString (filename) {
    var content = fs.readFileSync(filename);
    return content.toString('utf8');
}
    
app.get('/', function(request, response) {
    response.send(file_toString('./index.html'));
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
