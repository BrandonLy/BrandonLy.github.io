angular.module('CCSD_Risk')

.directive('independent', function() {
    return {
        templateUrl: '../templates/independent.html',
        controller: 'mainCtrl'
    };

});

console.log('independent.js was loaded');