var express = require('express');
var router = express.Router();

function apiInit(db){
    var usersApi = require('./api/users');
    var encuestaApi = require('./api/encuesta')(db);
    var catApi = require('./api/catalogo')(db);

    router.use('/users',usersApi);
    router.use('/catalogo',catApi);
    router.use('/encuesta',encuestaApi);

    return router;
}



module.exports = apiInit;