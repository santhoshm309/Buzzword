(function(){
    
    var responseHandler = require('../helper/responseHandler')
    var messageCodes = require('../helper/messageCodes')
    var Peer  = require('peer')
    module.exports.connectToPeerServer = function(req, res) {
    
        try {
            
            res.send(200);
            
        }catch (err){
            console.log(err);
            responseHandler.error(res,  messageCodes.SERVER_ERROR, 500);
        } 
        
    }
    
    
})();