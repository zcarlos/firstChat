var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Encaminhamento para ficheiros
app.use(express.static(__dirname + '/public'));
// Carrega ficheiro index relativo ao caminho defenido
//app.get('/', function(request, response){
//	response.sendFile(__dirname + '/index.html');
//});

io.on('connection', function(socket){
	console.log('Um utilizador conectou-se...');

	socket.on('mensagem chat', function(msg){
		//console.log(msg);
		io.emit('mensagem chat', msg);
	});

	socket.on('disconnect', function(){
		console.log('Um utilizador desconetou-se...');
	});
});

http.listen(3000, function(){
	console.log('A escuta no porto: 3000');
});