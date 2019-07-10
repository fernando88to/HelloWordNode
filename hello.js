#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({ selo: "123456AAAA123456", tfj:15.3, funcivil:15.85 , emolumento:80}));
    //res.json({selo: "123456AAA123456"});
}).listen(8500, 'localhost');

