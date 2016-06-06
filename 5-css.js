var express = require("express");
var path = require("path");

var app = express();
var loc = process.argv[3]||path.join(__dirname, 'public');

app.use( require('stylus').middleware( loc ));
app.use( express.static( loc ));

app.listen( process.argv[2] );
