angular.module('GamifyDevMountain')
    .controller('regCtrl', function ($scope, $state, authSvc) {
        
        $scope.user = {};
        console.log($scope.user);
        
        $scope.register = function () {
            authSvc.register($scope.user)
                .then(function (response) {
                  console.log(response);
                  $scope.user = response;
                })
        };
    });