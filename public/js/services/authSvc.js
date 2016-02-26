angular.module('GamifyDevMountain')
    .service('authSvc', function ($state, $http) {
        this.auth = {};
           
        /** Get Current Users ID */
        var currentUserId;
        this.getCurrentUser = function () {
            return currentUserId;
            console.log('Service: Current User Retrieved');
        }; 
         
        /** Get Current User */
        this.getCurrentUserObject = function () {
            return $http.get('/api/currentUser').then(function (currentUser) {
                return currentUser;
            })
            console.log('Service: Current User Object Retrieved');
        };
   
        /** Registration */
        this.register = function (user) {
            return $http.post('/api/register', user).then(function (registeredUser) {
                console.log(registeredUser);
                if (registeredUser) {
                    loggedIn = true;
                }
                $state.go('login');
                return registeredUser.data;
            })
            // console.log('Service: Successful Registration');
        };    
    
        /** Log In */
        var loggedIn = false;
        this.login = function (user) {
            // console.log('Sending ', user);
            return $http({
                method: 'POST',
                url: '/api/login',
                data: user
            }).then(function (loginData) {
                // console.log('Service: Successful Log In');
                return loginData.data;
            })
        };
      
        /** Log Out */
        this.logout = function () {
            return $http.get('/api/logout').then(function () {
                $state.go('user');
            });
            // console.log('Service: Successful Log Out');
        };
    });