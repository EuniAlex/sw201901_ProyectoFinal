var express = require('express');
var router = express.Router();

function apiInit(db){
    var usersApi = require('./api/users');
    var encuestaApi = require('./api/encuesta')(db);
    var catApi = require('./api/catalogo')(db);
    var cartApi = require('./api/Carrito/carrito')(db);

    router.use('/users',usersApi);
    router.use('/catalogo',catApi);
    router.use('/encuesta',encuestaApi);
    router.use('/carrito', cartApi);

    return router;
}



module.exports = apiInit;