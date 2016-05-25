angular.module('CCSD_Risk')

.directive('shelter', function() {
    return {
        templateUrl: '../templates/shelter.html',
        controller: 'mainCtrl'
    };

});

console.log('shelter.js was loaded');