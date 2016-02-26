angular.module("GamifyDevMountain")
    .controller("userCtrl", function ($scope, authSvc) {
        $scope.userCtrl = "userCtrl";
        // console.log('User Controller: Running');
        
        /** Connects UserData with the orderView */
        authSvc.getCurrentUserObject().then(function (currentUserResult) {
            $scope.user = currentUserResult.data;
            console.log($scope.user);
        });
    });