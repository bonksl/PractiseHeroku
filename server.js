var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 3000

app.usee(express.static(__dirname));

//routes
app.get("/", function(req,res){
	res.render("index");
})

app.listen(port, function(){
	console.log("app running");
})