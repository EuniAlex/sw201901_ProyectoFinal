var ObjectId = require("mongodb").ObjectID;

function encuestaModelInit(db){ 
  
    var lib = {};
    var encue = db.collection('encuestas');

    lib.addNewEncuesta = (newEncuesta, handler)=>{
        encue.insertOne(newEncuesta, (err,result)=>{
            if(err){
                handler(err, null);
              }else{
                handler(null, result.result);
              }
         });//end InsertOne

    }//end addNewEncuesta
    
    return lib;
}

module.exports = encuestaModelInit;