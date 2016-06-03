var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(function (socket) {  
    var date = new Date();
    var value = strftime( '%Y-%m-%d %H:%M\n', date );
    
    socket.end( value );
});

server.listen(port);
