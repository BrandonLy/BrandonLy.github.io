angular.module('CCSD_Risk')

.directive('reverse', function() {
    return {
        templateUrl: '../templates/reverse.html',
        controller: 'mainCtrl'
    };

});

console.log('reverse.js was loaded');