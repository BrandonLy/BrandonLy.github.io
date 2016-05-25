angular.module('CCSD_Risk')

.directive('evacuation', function() {
    return {
        templateUrl: '../templates/evacuation.html',
        controller: 'mainCtrl'
    };

});

console.log('evacuation.js was loaded');