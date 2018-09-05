(function(){


    angular.module('p2p')
        .factory('PeerService', function($http) {

        var BASE_URL = 'http://localhost:3443/peer'
        var PEER_ID = 0;
        var userFactory = {};
        var peer = null;
        
        function handleSuccess(data) {
            return data;
        }
        
        function handleError(err) {
            console.log(err);
        }
        
        userFactory.establishConnection = function(cb) {
            var code = true;
            peer = new Peer({
                host: 'localhost',
                port: 3443,
                path: '/peerjs-server'
            }).on('open', function(id) {
                PEER_ID = id;
                cb(peer);
            }).on('error', function(err) {
                cb(false);
            });

        }
        
        
        userFactory.closeConnection = function(cb) { 
        
            peer.disconnect();
            PEER_ID = 0;
            cb(1);
            
        }
        
        userFactory.getConnectedDevices = function() {
            return $http.get(BASE_URL+'/getConnectedDevices ').then(handleSuccess).catch(handleError);
        }
        
        
        userFactory.addDevices = function(devices) {
            
        }

        userFactory.getPeerId  = function() {
            return PEER_ID;
        }
        
        return userFactory;

    })

})();