var ObjectID= require("mongodb").ObjectID;
var user = require("mongodb").user;

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

    lib.getloginUser = (email, handler)=>{
        query.findOne({ "email": (email)}, (err, doc)=>{
            if(err){
              handler(err, null);
            }else{
              handler(null, doc);
            }
          }); // findOne
      } // getloginUser

    return lib;
}

module.exports= usersModel;