var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(5970, function(){
	console.log("listening on port 8887")
})