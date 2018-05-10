


var port_num = 3000;

var express = require('express');

var app = express();
var server = app.listen(3000);


app.use('/', express.static(__dirname + '/'));
console.log('My socket server is running on port:', port_num);


function newConnection(socket) {
    console.log(socket.id);
}