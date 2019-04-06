var express = require('express');
var router = express.Router();

function apiInit(db){
<<<<<<< HEAD
    var usersApi = require('./api/users');
    var encuestaApi = require('./api/encuesta')(db);
    var catApi = require('./api/catalogo')(db);
    var cartApi = require('./api/Carrito/carrito')(db);

    router.use('/users',usersApi);
    router.use('/catalogo',catApi);
    router.use('/encuesta',encuestaApi);
    router.use('/carrito', cartApi);
=======
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
>>>>>>> df8bc0d7609d6c825422c7c048843038a89fdf65

    return router;
}



module.exports = apiInit;