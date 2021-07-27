var express = require('express');
var app = express();
var path = require('path');
var PORT = 5000;

// Without middleware
app.get('/', function(req, res){
	var options = {
		root: path.join(__dirname)
	};
	
	res.sendFile("index.html",options, function () {
			console.log('Success');
	});
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server is running on PORT", PORT);
});

