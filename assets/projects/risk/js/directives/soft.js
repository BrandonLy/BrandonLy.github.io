angular.module('CCSD_Risk')

.directive('soft', function() {
    return {
        templateUrl: '../templates/soft.html',
        controller: 'mainCtrl'
    };

});

console.log('soft.js was loaded');