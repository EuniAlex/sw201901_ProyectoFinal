var ObjectId = require("mongodb").ObjectID;

function catalogoModelInit(db){ 
  
    var lib = {};
    var cat = db.collection('productos');

    lib.getAll = (handler)=>{
        cat.find({}).toArray(
            (err , docs) => {
              if(err){
                handler(err, null);
              }else{
                handler(null, docs);
              }
            }
           );//to array

    }//GetAllProducts

    lib.getProductById = (prodID, handler)=>{
        cat.findOne({ "_id": new ObjectId(prodID)}, (err, doc)=>{
            if(err){
              handler(err, null);
            }else{
              handler(null, doc);
            }
          }); // findOne
      } // getProductById
    
    return lib;
}

module.exports = catalogoModelInit;