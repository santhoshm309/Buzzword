(function(){

    angular.module('p2p').controller("TitleBarController", TitleBarController);

    TitleBarController.$inject = ["$window"];


    function TitleBarController($window) {
        
        const remote = require('electron').remote; 

        var ctrl = this;

        ctrl.close = function() {
            var  window = remote.getCurrentWindow();
            window.close();
        }
        
        ctrl.goTo = function(state){
            $state.go(state);
        }


    }


})();