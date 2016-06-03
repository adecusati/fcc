var fs = require("fs");
var path = require("path");

module.exports = function ( dir, ext, callback ) {
    
    fs.readdir( dir, function( err, list ) {
        if( err ) return callback(err);
        
        list.forEach( function( c ) {
           if ( path.extname(c) === '.' + ext ) {  
               callback( null, c );
           } 
        });
    });
    console.log( 'end' );
}
