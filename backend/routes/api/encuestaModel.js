var ObjectId = require("mongodb").ObjectID;

function encuestaModelInit(db){

    var lib = {};
    var encuesta = db.collection('encuesta');

    lib.addNewEncuesta = (newEncuesta, handler)=>{
        encuesta.InsertOne(newEncuesta, (err,result)=>{
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