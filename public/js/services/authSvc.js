angular.module('GamifyDevMountain')
    .service('authSvc', function ($state, $http) {
        this.auth = {};
    
    
        
        /** Get Current Users ID */
        var currentUserId;
        this.getCurrentUser = function () {
            return currentUserId;
            console.log('Function: getCurrentUser');
        }; 


             
        /** Get Current User */
        this.getCurrentUserObject = function () {
            return $http.get('/api/currentUser').then(function (currentUser) {
                return currentUser;
            })
            console.log('Function: getCurrentUserObject');
        };
  
  
        
        /** Registration */
        this.register = function (user) {
            return $http.post('/api/register', user).then(function (registeredUser) {
                console.log(registeredUser);
                if (registeredUser) {
                    loggedIn = true;
                    // notifyObserver();
                }
                $state.go('login');
                return registeredUser.data;
            })
            console.log('Function: register');
        };    
 
 
        
        /** Log In */
        var loggedIn = false;
        this.login = function (user) {
            console.log('Sending ', user);
            return $http({
                method: 'POST',
                url: '/api/login',
                data: user
            }).then(function (loginData) {
                console.log('Got Info Back');
                return loginData.data;
            })
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