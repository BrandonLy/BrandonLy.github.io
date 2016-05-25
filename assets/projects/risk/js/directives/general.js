angular.module('CCSD_Risk')

.directive('general', function() {
    return {
        templateUrl: 'templates/general.html',
        controller: 'mainCtrl'
    };

});

console.log('general.js was loaded');