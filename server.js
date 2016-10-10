var express = require('express');
var app = express();
var portNumber = 8200;
var path = require("path");
var cors = require('cors');

//app.use(express.static(__dirname));

app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'Mobile')));

app.listen(portNumber);

console.log(__dirname);
console.log("Listen on port:" +portNumber);
