angular.module('GamifyDevMountain')
    .controller('loginCtrl', function ($scope, $state, authSvc) {
        $scope.user = {};
        
        /** remove this object before launching the app */
        $scope.user = {
            username: 'phillippuckett88',
            password: 'phillippuckett88'
        }

        $scope.login = function (users) {
            authSvc.login($scope.user).then(function () {
                if (users.student) {
                    
                }
                $state.go('student');
                
            }).catch(function (err) {
                if (err.status === 401) {
                    alert('Invalid Login');
                } else {
                    console.error(err);
                }
            });
        };
    });