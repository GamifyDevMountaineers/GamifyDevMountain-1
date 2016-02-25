angular.module('GamifyDevMountain')
    .directive('navBarDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/navBar.html',
            controller: function ($scope) {
                $scope.navBarDir = 'navBarDir';
                console.log('navBarDir');
            }
        }
    });