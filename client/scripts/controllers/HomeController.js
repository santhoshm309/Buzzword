(function(){
    'use strict';
    angular.module('p2p').controller("HomeController", HomeController);

    HomeController.$inject = ["$window", "$state", "MainService"];


    function HomeController($window, $state) { 

        var ctrl = this;
        
        ctrl.goTo = function(state){
            $state.go(state);
        }   

    }


    
    
})()