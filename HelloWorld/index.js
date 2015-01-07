var http=require('http');
http.createServer(function  (req, res) {
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write("Hola mundo");
	res.end();
}).listen(9000);
console.log("Esta corriendo en el puerto:: 9000");