var fs = require("fs");
fs.readdir( process.argv[2], function( err, list ) {
    list.forEach( function( c ) {
        var re = RegExp( process.argv[3] + '$', "gi" );
        if( c.search( re ) > 0 ) {
            console.log( c );
        };
    });
});