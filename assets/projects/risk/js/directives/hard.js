angular.module('CCSD_Risk')

.directive('hard', function() {
    return {
        templateUrl: '../templates/hard.html',
        controller: 'mainCtrl'
    };

});

console.log('hard.js was loaded');