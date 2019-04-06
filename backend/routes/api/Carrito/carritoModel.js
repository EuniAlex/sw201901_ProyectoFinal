var ObjectId = require("mongodb").ObjectID;


function carritoModel(db){

  var lib = {};
  var car = db.collection('carritos');


  lib.create = (values, callbackFunc) => {

    newCarrito = { "_id" : { "userID" : values.userID, "productID" : values.productID},
    "userID" : values.userID,
    "productID" : values.productID,
    "productAmount" : parseInt(values.amount)
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
    parseInt(values.addAmount) = parseInt(values.amount) + parseInt(values.oldAmount);
    update = { $set: {amount:parseInt(values.addAmount)}};


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

  lib.removeAmount = (values, callbackFunc) => {
    query = { _id : {userID : values.userID, productID: values.productID}};
    parseInt(values.addAmount) = parseInt(values.oldAmount) - parseInt(values.amount);
    update = { $set: {amount:parseInt(values.addAmount)}};


    car.updateOne(query,update,(err, result) => {
      if(err){
        callbackFunc(err, null);
      }
      else{
        callbackFunc(null, result.result);
      }
    })

  }

  lib.getAllInstances = (values, callbackFunc) => {

    query = { userID : values.userID };


    car.find(query).toArray((err, result) => {
      
      if(err){
        callbackFunc(err,null);
      }
      else{
        callbackFunc(null, result);
      }
    });


  }

  lib.deleteSpecific = (values, callbackFunc) => {
    query = { _id: {userID : values.userID, productID: values.productID}};

    car.deleteOne(query,(err, result) => {
      if(err){
        callbackFunc(err, null);
      }
      else{
        callbackFunc(null, result.result);
      }
    })

  }

  lib.deleteByUser = (values, callbackFunc) => {
    query = { userID : values.userID };

    car.deleteMany(query,(err, result) => {
      if(err){
        callbackFunc(err, null);
      }
      else{
        callbackFunc(null, result.result);
      }
    })

  }
  return lib;
}


module.exports = carritoModel;