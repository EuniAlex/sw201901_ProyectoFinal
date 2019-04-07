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
        if(usersModel.getloginUser(_userData)!==true){

            usersModel.addNewUser(_usersData, (err, newUser)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({"error":"No se pudo agregar usuario"});
                }else{
                    return res.status(200).json(newUser);
                }
            });
        }else{
            console.log("Usuario Existente");
            return res.status(500).json({"error":"Usuario existente"});
        }
        
    });//post new
    
    router.post('/login', function(req,res,next){
        var _userData = req.body;
        console.log(_userData.email);
        usersModel.getloginUser(_userData.email,(err,userData)=>{
            if(err){
                res.status(403).json({"error":"Credenciales no validas"});
            }else if(userData == null){
                    req.session.logged =false;
                    req.session.loggeduser = "";
                    res.status(403).json({"error":"Credenciales no validas"});
            }else{
                    req.session.logged =true;
                    req.session.loggeduser = _userData.email;
                    res.status(200).json({"msg":"ok"});
            }
        });
    });
    

    // router.get('/loginUser/:email', function (req, res, next) {

    //     usersModel.getloginUser(req.params.email,(err,userInfo)=>{
    //         if(err){
    //             console.log(err);
    //             return res.status(500).json({"error":"Error Information del Usuario"});
    //           }
    //           else{
    //                if(userInfo.email === req.params.email){
    //                         req.session.logged =true;
    //                         req.session.loggeduser = req.params.email;
    //                         res.status(200).json({"msg":"ok"});
    //                     }
    //                     else{
    //                         res.status(403).json({"error":"Credenciales no validas"});
    //                     }
    //                 }
    //           return res.status(200).json(userInfo);
    //     });
    // });
    

    router.get('/logout', function (req, res, next) {
        var _userData = req.body;
        req.session.logged=false;
        req.session.loggeduser = null;
        res.json({ "msg": "ok" });
      });
      
      router.get('/session', function (req, res, next) {
        res.json({ "active": req.session.logged && true});
      });// post login
     
    return router;
}



module.exports = usersInit;