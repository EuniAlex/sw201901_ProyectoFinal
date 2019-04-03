var express = require('express');
var router = express.Router();

function usersInit(db){

    var usersModel = require('./usersModel')(db);

    var infoUsuarios={
        'email':'',
        'pswd':''
    };
    
    router.post('/new',function(req, res, next){
        var _usersData = Object.assign({} , infoUsuarios, req.body);
        usersModel.addNewUser(_usersData, (err, newUser)=>{
            if(err){
                console.log(err);
                return res.status(500).json({"error":"No se pudo agregar usuario"});
            }else{
                return res.status(200).json(newUser);
            }
        });
    });//post new
    
    router.post('/login', function(req,res,next){
     var _userData = req.body;
     console.log(_userData);
     res.json({"msg":"ok"});
    });//post login

    return router;
}



module.exports = usersInit;