angular.module('GamifyDevMountain')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/header.html',
            controller: function ($scope) {
                $scope.headerDir = 'headerDir';
                console.log('headerDir');
            }
        }
    });