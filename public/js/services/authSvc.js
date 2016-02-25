angular.module('GamifyDevMountain')
    .service('authSvc', function ($state, $http) {
        var auth = {};
        var loggedIn = false;
        var currentUserId;
        
        /** Get Current Users ID */
        // this.getCurrentUser = function () {
        //     return currentUserId;
        //     console.log('Function: getCurrentUser');
        // }; 
             
        /** Get Current User */
        // this.getCurrentUserObject = function () {
        //     return $http.get('/api/currentUser').then(function (currentUser) {
        //         return currentUser;
        //     })
        //     console.log('Function: getCurrentUserObject');
        // };
        
        /** Registration */
        this.register = function (user) {
            return $http.post('/api/register', user).then(function (registeredUser) {
                console.log(registeredUser);
                if (registeredUser) {
                    loggedIn = true;
                    // notifyObserver();
                }
                $state.go('main');
                return registeredUser.data;
            })
            console.log('Function: register');
        };    
        
        /** Log In */
        this.login = function (user) {
            console.log('SENDING: ', user);
            return $http.post('/api/login', user).then(function (loginData) {
                /* check in authSvc */
                currentUserId = loginData.data;
                if (loginData) {
                    loggedIn = true;
                    // notifyObserver();
                }
                $state.go('student');
            })
            console.log('Function: login');
        };
        
        /** Log Out */
        this.logout = function () {
            return $http.get('/api/logout').then(function () {
                $state.go('profile');
            });
            console.log('Function: logout');
        };
        
        /** Toggle */
        // this.isLoggedIn = function () {
        //     return loggedIn;
        // };
        // var notifyObserver;
        // this.subscribe = function (callback) {
        //     notifyObserver = callback;
        // };
        // console.log('Function: toggle');
    });