var app = require('express') ();

var http = require('http').Server(app);

var io = require('socket.io') (http);

app.get('/', function (req, res) {
    // res.send('<h1>hello</h1>');
    res.sendFile(__dirname +'/index.html');
});

io.on('connection', function(socket) {
    // socket.removeAllListeners()
    console.log('a user connected');
    socket.on('chat message', function(msg) {
        console.log('message', msg);
        // io.emit('chat message', msg);
        socket.broadcast.emit('chat message', msg);
    });
    // socket.on('disconnect', function() {
    //     console.log('user disconnected');
    // })
});

http.listen(3000, function() {
    console.log('listening on port: 3000');
});