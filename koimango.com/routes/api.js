const express = require('express');
const router = express.Router();

router.get('/static',function(req,res,next){
    console.log("User Router Working");
    res.end();
});

module.exports = router;