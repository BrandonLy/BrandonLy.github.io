angular.module('CCSD_Risk')

.directive('staff', function() {
    return {
        templateUrl: '../templates/staff.html',
        controller: 'mainCtrl'
    };

});

console.log('staff.js was loaded');