angular.module('GamifyDevMountain')
    .directive('loginDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/login.html',
            controller: function ($scope) {
                $scope.headerDir = 'loginDir';
                console.log('loginDir');
            }
        }
    });