angular.module('CCSD_Risk')

.directive('duck', function() {
    return {
        templateUrl: '../templates/duck.html',
        controller: 'mainCtrl'
    };

});

console.log('duck.js was loaded');