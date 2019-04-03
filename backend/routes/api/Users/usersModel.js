var ObjectId = require("mongodb").ObjectID;

function usersModel(db){
    var lib = {};
    var query = db.collection('usuarios');

    lib.addNewUser = (newUser, handler)=>{
        query.insertOne(newUser, (err,r)=>{
            if(err){
                handler(err,null);
            }else{
                handler(null,r.result);
            }
        });
    }//end of addNewUser

    return lib;
}

module.exports= usersModel;