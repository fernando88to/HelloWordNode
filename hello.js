#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({ selo: "123456AAAA123456", tfj:15.3, funcivil:15.85 , emolumento:80,
    atos:[
        {nome:" Tabela V 1.1 - Protocolo de qualquer documento para realização de qualquer serviço, exceto os serviços de autenticação, reconhecimento de firmas e emissão de certidão", protocolo:'AAAA'},
        {nome:"Tabela V 1.5 - Pela abertura de firma, incluindo a confecção, guarda e conservação do primeiro cartão ou ficha de assinatura em qualquer meio", protocolo:"AAA"}

    ]}));
    //res.json({selo: "123456AAA123456"});
}).listen(8500, 'localhost');

