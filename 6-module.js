var m = require("./module.js");
m( process.argv[2], process.argv[3], function( e, d ) {
    if( e ) {
        console.error(e);
    } else {
        console.log(d);
    }
});