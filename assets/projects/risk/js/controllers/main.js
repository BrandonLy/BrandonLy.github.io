
console.log('main.js loaded');

angular.module('CCSD_Risk')

.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log('helloWorld');
    };
})

.controller('FileOpenerController', function($scope, $cordovaFileOpener2) {
    $scope.openPDF = function(pdf) {
        cordova.plugins.fileOpener2.open(
            'flood-plans/' + pdf + '.pdf', // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
            'application/pdf',
            {
                error : function(e) {
                    console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                },
                success : function () {
                    console.log('file opened successfully');
                }
            }
        );
    };
})
.controller('TestController', function($scope) {
    $scope.testConsole = function() {
        console.log("this is a working controller");
    }
});
