// Varibales globales
web = null;
webArray = [];
cont = 0;

// Creamos el server
var server = require('websocket').server, http = require('http');

// Creamos el sockect
var socket = new server({
	httpServer: http.createServer().listen(1337, function() {
	console.log("Server corriendo en el puerto 1337")
	})
});


socket.on('request', function(request) {

	var connection = request.accept(null, request.origin);

	connection.on('message', function(message) {

		// console.log(connection);
		console.log(message);	
		// Recivimos el mensaje
		var packet = message.utf8Data.split('|');
		var endpoint = packet[0] || 'nothing';
		//var value = packet[1] || 'valor1,valor2';

		switch( endpoint ) {

			case 'machine':
				//Guardamos la maquina
				console.log( /*( new Date() ) + */ ' Connection accepted RASP');
			break;

			case 'web':
				web = connection;
				webArray[cont] = web;
				cont++;

				console.log( /*( new Date() ) + */ ' Connection accepted WEB');
				console.log(webArray.length);

				//console.log(web);
			break;

			case 'product':
				// var value = packet[1];
				//var value = 'p1,p2';
				if ( webArray.length > 0 ) {
					for (var i = 0; i < webArray.length; i++) {
						// webArray[i].send(packet[1]);
						webArray[i].send('56,' + cont);
					}

				}
			break;

			default:
				// NADA
			break;
		}
	});

	connection.on('close', function(connection) {
		console.log('Coneccion cerrada');
	});

});