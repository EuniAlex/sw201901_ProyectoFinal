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
        usersModel.getloginUser(_userData,(err,userData)=>{
            if(err){
                res.status(403).json({"error":"Credenciales no validas"});
            }else{
                if(req.body.email === _userData.email && req.body.pswd === _userData.pswd){
                    req.session.logged =true;
                    req.session.loggeduser = req.body.email;
                    res.status(200).json({"msg":"ok"});
                }
                else{
                    res.status(403).json({"error":"Credenciales no validas"});
                }
            }
        });
    });

    router.get('/logout', function (req, res, next) {
        var _userData = req.body;
        req.session.logged=false;
        req.session.loggeduser = null;
        res.json({ "msg": "ok" });
      });// post login
      
      router.get('/session', function (req, res, next) {
        res.json({ "active": req.session.logged && true});
      });// post login
     
    return router;
}



module.exports = usersInit;