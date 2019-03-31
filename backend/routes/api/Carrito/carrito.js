var express = require('express');
var router = express.Router();


function initCarrito(db){
  var carritoModel = require('./carritoModel')(db);



  router.post('/createOrAddCarrito', function( req, res, next) { 

    var body = req.body;

    carritoModel.getSpecificInstance(body, (errorCarritoQuery, resultCarritoQuery) => {
      if(errorCarritoQuery){
        return res.status(500).send({message: "Se presento un error al intentar agregar productos"})
      } else {
          if(resultCarritoQuery === null){
              carritoModel.create(body, (errorCarritoInsert, resultCarritoInsert) =>{
                if(errorCarritoInsert){
                  return res.status(500).send({message: "Se presento un error al intentar insertar registro"})
                } else {
                    if (Object.keys(resultCarritoInsert).length === 0 && resultCarritoInsert.constructor === Object) {
                      return res.status(204).send();
                    } else {
                      return res.status(200).send({resultado: resultCarritoInsert});
                    }
                }
              });
            }
          else{
            body.oldAmount = resultCarritoQuery.amount;
            carritoModel.addAmount(body, (errorCarritoAdd, resultCarritoAdd) =>{
              if(errorCarritoAdd){
                return res.status(500).send({message: "Se presento un error al intentar de actualizar cantidad"})
              } else {
                  if (Object.keys(resultCarritoAdd).length === 0 && resultCarritoAdd.constructor === Object) {
                    return res.status(204).send();
                  } else {
                    return res.status(200).send({resultado: resultCarritoAdd});
                  }
              }
            });

          }
        }
      
    });

    
  });


  /*router.post('/addAmount', function( req, res, next) { 

    var body = req.body;

    carritoModel.add(body, (errorCarritoAdd, resultCarritoAdd) => {
      if(errorCarritoAdd){
        return res.status(500).send({message: "Se presento un error al intentar agregar productos"})
      } else {
          if (Object.keys(resultCarritoAdd).length === 0 && resultCarritoAdd.constructor === Object) {
            return res.status(204).send();
          } else {
            return res.status(200).send({resultado: resultCarritoAdd});
          }
      }
    });

  });*/


  router.get('/carritosByUser/:id', function( req, res, next) { 



  });



  router.get('/specificInstance', function( req, res, next) { 

    console.log(req.query);
    var body = req.query;

    console.log("addsasada");
  
    carritoModel.getSpecificInstance(body, (errorCarritoQuery, resultCarritoQuery) => {
      if(errorCarritoQuery){
        return res.status(500).send({message: "Se presento un error al intentar agregar productos"})
      } else {
          if (Object.keys(resultCarritoQuery).length === 0 && resultCarritoQuery.constructor === Object) {
            return res.status(204).send();
          } else {
            if(resultCarritoQuery === null){
              return res.status(200).send({message: "La instancia de carrito no existe"})
            }
            else{
              return res.status(200).send({resultado: resultCarritoQuery});
            }
          }
      }
    });

  });

  return router;


}


module.exports = initCarrito;