(function(){


    angular.module('p2p').factory('MainService',function($http) {
        var BASE_URL = 'http://localhost:8080/api/'
        var userFactory = {};

        userFactory.test = function(id) {

            return $http.get(BASE_URL+'test');
        };

        return userFactory;

    })




})();