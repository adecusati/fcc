var http = require("http");
var parser = require("url");

var epoch = new Date( '1 Jan 1970 00:00:00 UTC' );

var server = http.createServer( function( req, res ) {
    var url = parser.parse( req.url, true );
    var date = new Date( url.query.iso || null );
    var result = {};

    switch( url.pathname ) {
        case '/api/parsetime':
            result.hour = date.getHours();
            result.minute = date.getMinutes();
            result.second = date.getSeconds();
            break;
        case '/api/unixtime':
            result.unixtime = date.getTime();
            break;
        default:
            res.end();
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end( JSON.stringify(result) );
});

server.listen( process.argv[2] );
