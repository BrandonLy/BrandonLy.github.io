angular.module('CCSD_Risk')

.directive('flood', function() {
    return {
        templateUrl: 'templates/flood.html',
        controller: 'mainCtrl'
    };

});

console.log('flood.js was loaded');
