const express = require('express');
const router = express.Router();

router.get('/data',function(req,res){
    res.send({type: 'GET'});
};