(function(){
    'use strict';
    angular.module('p2p').controller("WorkspaceController", WorkspaceController);

    WorkspaceController.$inject = ["$window", "$state", "MainService", "PeerService"];


    function WorkspaceController($window, $state, MainService, PeerService) { 

        var ctrl = this;
        ctrl.isConnection = false;
        ctrl.isDevicesShown = false;
        ctrl.devices = [];
        ctrl.selfPeerId;
        ctrl.selectedDevices = {count: 0, devices: []};
        
        ctrl.toggleConnection = function() {
            !ctrl.isConnection ? ctrl.establishConnection() : ctrl.closeConnection();
        }

        ctrl.toggleButton = function() {

            var toggleBody = document.querySelector('.toggle-body');
            var toggleBtn = document.querySelector('.toggle-btn');
            ctrl.toggleConnection();
            toggleBody.classList.toggle('toggle-body--on');
            toggleBtn.classList.toggle('toggle-btn--on');
            toggleBtn.classList.toggle('toggle-btn--scale');

        }

        ctrl.establishConnection = function() {
            PeerService.establishConnection(function(data) {
                data ? ctrl.peer = data : isConnection = false;
                ctrl.isConnection = true;
                ctrl.selfPeerId = PeerService.getPeerId();
            });
            
            
        }
        
        ctrl.closeConnection = function() {
            
            PeerService.closeConnection(function(data) {
                ctrl.isConnection = false;
                ctrl.selfPeerId = null;
            });   
        }
        
        
        ctrl.showDevices = function() {
            
            PeerService.getConnectedDevices().then(function(data) {
                var devices = data.data;
                ctrl.resDevices = Object.keys(JSON.parse(devices).peerjs);
                ctrl.resDevices.forEach(function(item) {
                    if(item!=ctrl.selfPeerId)
                        ctrl.devices.push({id: item, checked: false});
                })
                ctrl.isDevicesShown = true;
            })
            
        }
        
        function filterDevices() {
             ctrl.selectedDevices.devices = ctrl.selectedDevices.devices.filter(function(item){
                return item.checked == true;
            })
        }

        ctrl.onSelectDevice = function(device) {
            device.checked = !device.checked;
            device.checked ? ctrl.selectedDevices.count++ : ctrl.selectedDevices.count--; 
            device.checked ? ctrl.selectedDevices.devices.push(device) : filterDevices();
            
        }
        

        ctrl.goTo = function(state){
            $state.go(state);
        }   

    }




})();