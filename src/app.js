var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var router = require('./routes');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/v1', router);

  

// //Creating an express server
// const port = 3000;
// app.listen(port, (err)=>{
//     if(err) console.error("Error ");
//     console.log(`Express API is listening at port : ${port}`)
// })
app.use((err, req, res, next) => {
    res.status(400).json({ error: err.stack });
  });
module.exports = app