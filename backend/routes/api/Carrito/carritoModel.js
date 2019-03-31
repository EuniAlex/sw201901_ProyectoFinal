var ObjectId = require("mongodb").ObjectID;


function carritoModel(db){

  var lib = {};
  var car = db.collection('carritos');


  lib.create = (values, callbackFunc) => {

    newCarrito = { "_id" : { "userID" : values.userID, "productID" : values.productID},
    "userID" : values.userID,
    "productID" : values.productID,
    "productAmount" : values.amount
    }

    car.insertOne(newCarrito, (err, result) => {
      if(err){
        callbackFunc(err, null);
      }
      else{
        callbackFunc(null, result.result);
      }
    })

  }

  
  lib.addAmount = (values, callbackFunc) => {

    query = { _id : {userID : values.userID, productID: values.productID}};
    values.addAmount = parseInt(values.amount) + parseInt(values.oldAmount);
    update = { $set: {amount:values.addAmount}};


    car.updateOne(query,update,(err, result) => {
      if(err){
        callbackFunc(err, null);
      }
      else{
        callbackFunc(null, result.result);
      }
    })

  }

  lib.getSpecificInstance = (values, callbackFunc) => {

    query = { _id : {userID : values.userID, productID: values.productID}};

    car.findOne(query, (err, result) => {
      
      if(err){
        callbackFunc(err,null);
      }
      else{
        callbackFunc(null, result);
      }
    });

  }


  return lib;
}


module.exports = carritoModel;