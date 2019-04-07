var express = require('express');
var router = express.Router();

function apiInit(db){
   
    var cartApi = require('./api/Carrito/carrito')(db);
    var usersApi = require('./api/Users/users')(db);
    var encuestaApi = require('./api/Encuesta/encuesta')(db);
    var catApi = require('./api/Catalogo/catalogo')(db);

    function verfiUser(req, res, next){
        var isLogedIn = req.session.logged && true;
        if(isLogedIn){
            next();
        }else{
            res.status(403).json({"error":"No Autorizado"});
        }
    }
    router.use('/users',usersApi);
    router.use('/catalogo',verfiUser,catApi);
    router.use('/encuesta',verfiUser,encuestaApi);
    router.use('/carrito', cartApi);



    return router;
}



module.exports = apiInit;