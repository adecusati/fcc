var http = require("http");

var urls = process.argv.slice(2);
var msgs = {};
var done = 0;

urls.forEach( function( url, i, a ) {
    http.get( url, function(res) {
        res.on( 'error', function(err) {
            console.error(err);
        }).on( 'data', function(data) {
            msgs[url] = (msgs[url] || '') + data.toString();
        }).on( 'end', function() {
            done++;
            if( done === urls.length ) {
                urls.forEach( function( c, i, a ) {
                    console.log(msgs[c]);
                });
            }
        });
    });
});
