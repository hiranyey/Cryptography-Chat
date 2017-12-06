var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});
User = 0;
io.on('connection', function(socket) {
    socket.on('joined', function(X) {
        User++;
        io.emit('add', {
            "Users": User,
            "Name": X
        });
    });
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});
http.listen(process.env.PORT);