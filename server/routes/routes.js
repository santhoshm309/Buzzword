(function() {
    
    var express = require('express');
    var router = express.Router();
    
    var bodyParser = require('body-parser');
    
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(bodyParser.json());
    router.use(bodyParser.json({type: 'application/vnd.api+json'}));

    
    var DevicesController = require('../controllers/DevicesController');
    
    router.get('/test', function(req, res) {
        console.log("Hello");
        DevicesController.connectToPeerServer(req, res);
    });
    
    module.exports = router;

    
})();