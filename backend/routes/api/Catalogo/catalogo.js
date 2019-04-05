var express = require('express');
var router = express.Router();

function catalogoInit(db){
    var catalogoModel = require('./catalogoModel')(db);

    var catPost = {
      'desc':'',
      'fcIng':null,
      'marca':'',
      'modelo':'',
      'year':'',
      'stock':'',
      'precio':'',
      'image':''
    };

    router.post('/new', function(req,res,next){
      var data = Object.assign({} , catPost, req.body);
      var dateT = new Date();
      data.fcIng = dateT;
      catalogoModel.addNewProduct(data, (err, newThing)=>{
        if(err){
          console.log(err);
          return res.status(500).json({"error":"No se puede agregar Thing!"});
        }
        return res.status(200).json(newThing);
      });
    })

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

    router.get('/GProByYEAR/:year',function(req,res,next){
        catalogoModel.getProductByYear(req.params.year, (err, Doc)=>{
            if(err){
              console.log(err);
              return res.status(500).json({"error":"Error al obtener el Producto"});
            }
            return res.status(200).json(Doc);
        }); //GetProdByYEAR
    }); // Cierre del Get por year

    router.get('/GProByMarca/:marca',function(req,res,next){
      catalogoModel.searchByMarca((req.params.marca || '').split('_'), (err, Doc)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"Error al obtener el Producto"});
          }
          return res.status(200).json(Doc);
      }); //GetProdByYEAR
  })

  router.get('/GProByModelo/:modelo',function(req,res,next){
    catalogoModel.searchByModelo((req.params.modelo || '').split('_'), (err, Doc)=>{
        if(err){
          console.log(err);
          return res.status(500).json({"error":"Error al obtener el Producto"});
        }
        return res.status(200).json(Doc);
    }); //GetProdByYEAR
})

    return router;
}

module.exports = catalogoInit;