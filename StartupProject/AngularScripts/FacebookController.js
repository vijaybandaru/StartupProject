'use strict';

myApp.directive('startUpProjectFacebook', function () {

    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: "./Templates/Facebook.html",
        controller: "FacebookController",
        bindToController: true,
        scope: {

        },

        link: {

            pre: function preLink() {

            },

            post: function postLink() {

            }
        }
    });

}).controller('FacebookController', ["$scope", function ($scope) {

    $scope.FacebookInit = function () {
        //Initialize ans setup facebook JDK
        window.fbAsyncInit = function () {
            FB.init({
                appId: '220719745236110',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v3.1'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    $scope.FBLoginMethod = function () {
        FB.login(function (response) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (myProfileresponse) {
                console.log('Successful login for: ' + myProfileresponse.name);
                var accesstoken = FB.getAuthResponse();
                document.getElementById('status').innerHTML = 'Thanks for logging in, ' + myProfileresponse.name + '!';

                /* make the API call */
                FB.api("/" + response.authResponse.userID + "/friendlists", function (frienlistresponse) {
                    if (frienlistresponse && !frienlistresponse.error) {
                        /* handle the result */
                    }
                }, function (errorfunction) {

                    debugger;
                });
                // FB.api(
                //     "/{friend-list-id}",
                //     function (response) {
                //         if (response && !response.error) {
                //             /* handle the result */
                //         }
                //     }
                // );

            });



        })
    }

    $scope.FacebookInit();

}]);
