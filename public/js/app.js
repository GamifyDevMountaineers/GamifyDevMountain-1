angular.module("GamifyDevMountain", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('main', {
                url: '/main',
                templateUrl: 'html/states/mainState.html',
                controller: 'mainCtrl',
                // resolve: {
                //     user: function (authSvc, $state) {
                //         return authSvc.getCurrentUserObject().then(function (response) {
                //             if (response.status != 200) {
                //                 $state.go('login')
                //             }
                //             console.log(response);
                //             return response.data;
                //         })
                //         console.log('Resolve in main');
                //     }
                // }
            })

            .state('registration', {
                url: '/registration',
                templateUrl: 'html/states/regState.html',
                controller: 'regCtrl'
            })

            .state('profile', {
                url: '/profile',
                templateUrl: 'html/states/profileState.html',
                controller: 'profileCtrl'
            })

        $urlRouterProvider.otherwise('/main');
    });