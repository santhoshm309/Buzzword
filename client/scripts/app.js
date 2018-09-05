
    var states = [{
       
        'name' : 'home',
        'state' : {
            'url' : '/home',
            'templateUrl' : 'views/home.html',
            'data' : {
                'visible' : false,
                'text' : 'Home'
            }
        }
        
    },
    {
       
        'name' : 'workspace',
        'state' : {
            'url' : '/workspace',
            'templateUrl' : 'views/workspace.html',
            'data' : {
                'visible' : false,
                'text' : 'Workspace'
            }
        }
        
    }];
    var app = angular.module('p2p',['ui.router','ngMaterial', 'ngAnimate']).config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        app.stateProvider = $stateProvider;
        
        angular.forEach(states, function(state){
            $stateProvider.state(state.name, state.state);
        })
    })
    
    
    