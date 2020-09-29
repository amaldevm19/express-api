var express = require('express');
const testEnvironmentVariable  = require("./config")
var router = express.Router();

router.get('/', (req, res, next)=>{
    return res.status(200).json({message: testEnvironmentVariable })
})

module.exports = router;