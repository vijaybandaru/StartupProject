'use strict';

myApp.directive('startUpProjectGoogle', function () {

    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: "./Templates/Facebook.html",
        controller: "GoogleController",
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

}).controller('GoogleController', ["$scope", function ($scope) {

    $scope.GoogleInit = function () {
        
    }

    $scope.GoogleLoginMethod = function(){

        //Update a web page without reloading the page
        //Request data from a server - after the page has loaded
       // Receive data from a server  - after the page has loaded
        //Send data to a server - in the background
        //All modern browsers have a built-in XMLHttpRequest object to request data from a server.
        //POST is more robust and secure than GET
        //POST has no size limitations

        // var xhttp = new XMLHttpRequest();

        // xhttp.onreadystatechange = function(){
        //     if(this.readyState == 4 && this.status == 200){
        //         document.getElementById("status").innerHTML = this.responseText;
        //     }
        // }

        // xhttp.open("GET", "Sample.xml", true);
        // xhttp.send();

    }

    

    $scope.GoogleInit();

}]);