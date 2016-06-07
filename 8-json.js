var fs = require("fs");
var express = require("express");

var app = express();
var file = process.argv[3];

app.all( '/books', function( req, res ) {
    fs.readFile( file, function( err, data ) {
        if( err ) console.error( err );
        res.send(  JSON.parse(data) );
    });
});

app.listen( process.argv[2] );
