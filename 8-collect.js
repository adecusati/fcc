var http = require("http");

var url = process.argv[2];

var msg = "";

http.get( url, function(res) {
    res.on( 'data', function(data) {
        msg += data.toString();
    }).on( 'error', function(err) {
        console.error(err);
    }).on( 'end', function() {
        console.log(msg.length);
        console.log(msg);
    });
});
