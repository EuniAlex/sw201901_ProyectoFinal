var express = require('express');
var router = express.Router();

router.post('/new',function(req, res, next){
 var _userData = req.body;
 console.log(_userData);
 res.json({"msg":"ok"});
});//post new

router.post('/login', function(req,res,next){
 var _userData = req.body;
 console.log(_userData);
 res.json({"msg":"ok"});
});//post login

module.exports = router;