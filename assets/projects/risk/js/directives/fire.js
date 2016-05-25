angular.module('CCSD_Risk')

.directive('fire', function() {
    return {
        templateUrl: 'templates/fire.html',
        controller: 'mainCtrl'
    };

});

console.log('fire.js was loaded');