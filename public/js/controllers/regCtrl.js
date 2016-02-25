angular.module('GamifyDevMountain')
    .controller('regCtrl', function ($scope, $state, authSvc) {
        
        $scope.user = {};
        console.log($scope.user);
        
        $scope.register = function () {
            authSvc.register($scope.user)
                .catch(function (err) {
                    console.error('Registration Error', err);
                    if (err.data.code === 11000) {
                        console.log('Registration Error');
                    }
                    $scope.error = err;
                })
        };
    });