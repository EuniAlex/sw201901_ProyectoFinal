var express = require('express');
var router = express.Router();

function catalogoInit(db){
    var catalogoModel = require('./catalogoModel')(db);

    router.get('/GPro', function( req, res, next) { 
        catalogoModel.getAll(
          function(err, docs){
            if(err) {
              console.log(err);
              return res.status(500).json({error:"Fallo consulta"});
            }
            return res.status(200).json(docs);
          }
        );
    });

    router.get('/GProByID/:prodID',function(req,res,next){
        catalogoModel.getProductById(req.params.prodID, (err, Doc)=>{
            if(err){
              console.log(err);
              return res.status(500).json({"error":"Error al obtener el Producto"});
            }
            return res.status(200).json(Doc);
        }); //GetProdByID
    }); // Cierre del Get por ID


    return router;
}

module.exports = catalogoInit;