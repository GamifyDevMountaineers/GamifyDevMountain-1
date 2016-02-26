angular.module('GamifyDevMountain')
    .directive('userViewDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/userViewTmpl.html',
            controller: function ($scope) {
                $scope.userViewDir = 'userViewDir';
                // console.log('userView Controller: Running');
            }
        }
    });