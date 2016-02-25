angular.module('GamifyDevMountain')
    .directive('regDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/registration.html',
            controller: function ($scope) {
                $scope.headerDir = 'regDir';
                console.log('regDir');
            }
        }
    });