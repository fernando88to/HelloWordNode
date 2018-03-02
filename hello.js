#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Servidor Rodando 1.1\n');
}).listen(8500, 'localhost');
console.log('Servidor rodando http://localhost:8500/');
