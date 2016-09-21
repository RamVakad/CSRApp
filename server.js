var express = require('express');
var bodyParser = require('body-parser')

var expressServer = express();

expressServer.use(express.static(__dirname+'/public'));
expressServer.use(bodyParser.json());

expressServer.get('/index', function(req, res){
    res.sendFile(__dirname+'/public/index.html');
});

expressServer.listen(8082, function(err){
    if(err){
        throw err;
    }
    console.log("CSR WebApp Started on 8082.");
});
