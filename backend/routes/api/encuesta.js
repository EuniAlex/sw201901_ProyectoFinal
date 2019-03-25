var express = require('express');
var router = express.Router();

function encuestaInit(db){
    
    var encuestaModel = require('./encuestaModel')(db);
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

    router.post('/newEncuesta', function(req, res, next){
        var _encuestaData = Object.assign({}, encuestaTemp, req.body);
        _encuestaData.fechaEnvio = new Date();
        
        encuestaModel.addNewEncuesta(_encuestaData, (err, newEncuesta)=>{
            if(err){
                console.log(err);
                return res.status(500).json({"error":"No se puedo guardar la encuesta!"});
              }
              return res.status(200).json(newEncuesta);
        });
    });

    return router;
}

module.exports = encuestaInit;