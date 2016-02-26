angular.module('GamifyDevMountain')
    .directive('headerDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/headerTmpl.html',
            controller: function ($scope) {
                $scope.headerDir = 'headerDir';
                // console.log('Header Controller: Running');
            }
        }
    });