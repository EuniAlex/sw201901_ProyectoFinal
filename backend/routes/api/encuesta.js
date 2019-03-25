var express = require('express');
var router = express.Router();

function encuestaInit(db){
    
    var mongoModel = require('./mongoModel')(db);
    var data = null; // temporary store

    var encuestaTemp = {
    'email':'',
    'fechaEnvio':null,
    'respuesta1':'',
    'respuesta2':'',
    'respuesta3':'',
    'respuesta4':'',
    'comentario':''
    };


    return router;
}

module.exports = encuestaInit;