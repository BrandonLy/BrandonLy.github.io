angular.module('CCSD_Risk')

.directive('weapon', function() {
    return {
        templateUrl: 'templates/weapon.html',
        controller: 'mainCtrl'
    };

});

console.log('weapon.js was loaded');