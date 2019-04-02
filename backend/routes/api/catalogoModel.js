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

    lib.getProductByYear = (year, handler)=>{
        cat.findOne({ 'year': year}, (err, doc)=>{
            if(err){
              handler(err, null);
            }else{
              handler(null, doc);
            }
          }); // findOne
      } // getProductByYear
    
      lib.searchByMarca = (marca, handler)=>{
        var queryObject= {"marca": {"$in": Array.isArray(marca)? marca: [marca]}};
        cat.find(queryObject).toArray((err, docs) => {
          if(err){
            handler(err, null);
          }else{
            handler(null, docs);
          }
        }); //toArray
      } // getProductByMarca      

      lib.searchByModelo = (modelo, handler)=>{
        var queryObject= {"modelo": {"$in": Array.isArray(modelo)? modelo: [modelo]}};
        cat.find(queryObject).toArray((err, docs) => {
          if(err){
            handler(err, null);
          }else{
            handler(null, docs);
          }
        }); //toArray
      } // getProductByModelo

      lib.addNewProduct = (newPro, handler)=>{
        cat.insertOne(newPro, (err, r)=>{
          if(err){
            handler(err, null);
          }else{
            handler(null, r.result);
          }
        }); //insert One
      }// addNewPro
    return lib;
}

module.exports = catalogoModelInit;