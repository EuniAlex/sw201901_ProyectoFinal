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
                    return res.status(200).send({message: "carrito agregado con exito"});
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


  router.get('/carritosByUser', function( req, res, next) { 
    console.log(req.query);
    var body = req.query;

    console.log("addsasada");
  
    carritoModel.getAllInstances(body, (errorCarritoQuery, resultCarritoQuery) => {
      if(errorCarritoQuery){
        return res.status(500).send({message: "Se presento un error en el servidor"})
      } else {
          if (Object.keys(resultCarritoQuery).length === 0 && resultCarritoQuery.constructor === Object) {
            return res.status(204).send();
          } else {
            if(resultCarritoQuery.length === 0){
              return res.status(400).send({message: "La instancia de carrito no existe"})
            }
            else{
              console.log(resultCarritoQuery);
              return res.status(200).send({resultado: resultCarritoQuery});
            }
          }
      }
    });

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
              return res.status(400).send({message: "La instancia de carrito no existe"})
            }
            else{
              return res.status(200).send({resultado: resultCarritoQuery});
            }
          }
      }
    });

  });


  router.get('/allCarritos', function( req, res, next) { 

    console.log(req.query);
    var body = req.query;

    console.log("addsasada");
  
    carritoModel.getAllInstances(body, (errorCarritoQuery, resultCarritoQuery) => {
      if(errorCarritoQuery){
        return res.status(500).send({message: "Se presento un error en el servidor"})
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

  router.post('/deleteByUserID', function( req, res, next) { 
    var body = req.body;
    carritoModel.deleteByUser(body, (errorCarritoQuery, resultCarritoQuery) => {
      if(errorCarritoQuery){
        return res.status(500).send({message: "Se presento un error al eliminar carritos"});
      } else {
        console.log(resultCarritoQuery);
        return res.status(200).send({message: "Carritos eliminado con exito"});
      }
    });
  });


  router.post('/reduceAmount', function( req, res, next) { 
    var body = req.body;

    carritoModel.getSpecificInstance(body, (errorCarritoQuery, resultCarritoQuery) => {
      if(errorCarritoQuery){
        return res.status(500).send({message: "Se presento un error al reducir cantidad"})
      } else {
          if(resultCarritoQuery === null){
            return res.status(400).send({message: "No existe esa instacia de carrito"})
            }
          else{
            body.oldAmount = resultCarritoQuery.amount;
            if(parseInt(body.oldAmount) < parseInt(body.minusAmount)){

            }
            else{
              carritoModel.removeAmount(body, (errorCarritoAdd, resultCarritoAdd) =>{
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
        }
    });
  });

  router.post('/deleteSpecificInstance', function( req, res, next) { 
    var body = req.body;
    carritoModel.deleteSpecific(body, (errorCarritoQuery, resultCarritoQuery) => {
      if(errorCarritoQuery){
        return res.status(500).send({message: "Se presento un error al eliminar carrito"});
      } else {
        console.log(resultCarritoQuery);
        if(resultCarritoQuery.n === 0 && resultCarritoQuery.ok === 1){
          return res.status(400).send({message: "Carrito no existe"});
        }
        else{
          return res.status(200).send({message: "Carrito eliminado con exito"});
        }
      }
    });


  });


  return router;


}


module.exports = initCarrito;