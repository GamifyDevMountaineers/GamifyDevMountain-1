angular.module('GamifyDevMountain')
    .controller('loginCtrl', function ($scope, $state, authSvc) {
        $scope.user = {};
        
        /** remove this object before launching the app */
        $scope.user = {
            username: 'phillippuckett88',
            password: 'phillippuckett88'
        }

        $scope.login = function (user) {
            authSvc.login(user).then(function (user) {
                console.log('Logged in as ', user);
                if (user.Login === true) {
                    console.log('Where we goin?');
                    $state.go('profile');
                }
            }).catch(function (err) {
                if (err.status === 401) {
                    alert('Invalid Login');
                } else {
                    console.error(err);
                }
            });
        };
    });