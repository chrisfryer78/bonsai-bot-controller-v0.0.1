var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var SerialPort = require("serialport").SerialPort;

var serialPort = new SerialPort("COM71", { baudrate: 57600 }, false); 

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

serialPort.open(function (error) {
	if ( error ) {
		console.log('failed to open: '+error);
	} else {
		console.log('serialPort open!');
	}
});

io.on('connection', function(socket){
  socket.on('rover message', function(msg){
	switch(msg) {
    case 'fwd':
		serialPort.write('Forward\n', function(err, results) {
			console.log('Forward');
		});
        break;
    case 'bwd':
		serialPort.write('Backward\n', function(err, results) {
			console.log('Backward');
		});
        break;
    case 'left':
		serialPort.write('Left\n', function(err, results) {
			console.log('Left');
		});
        break;
    case 'right':
		serialPort.write('Right\n', function(err, results) {
			console.log('Right');
		});
        break;
	}
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
