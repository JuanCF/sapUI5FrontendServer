var express = require('express');
var app = express();
var portNumber = 4000;
var path = require("path");

//app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, '..', 'Mobile')));

app.listen(portNumber);

console.log(__dirname);
console.log("Listen on port:" +portNumber);
