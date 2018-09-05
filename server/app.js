(function(){

    var express = require('express');

    

    var app = express();

    var logger = require('morgan');

   // app.use(logger());

    var routes = require('./routes/index.js')(app);

    var server = app.listen(8080);

    var options  = {
        debug : true
    }

    
    console.log("Server is running at port 8080");

    module.exports = app;


})();