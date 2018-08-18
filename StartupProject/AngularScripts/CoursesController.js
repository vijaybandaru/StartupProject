'use strict';

myApp.directive('startUpProjectCourses', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: "Templates/Courses.html",
        controller: "CoursesController",//controller to bind
        bindToController: true,//Common Scope Sharing
        scope: {
            /* NOTE: Normally I would set my attributes and bindings
            to be the same name but I wanted to delineate between 
            parent and isolated scope. */
            //isolatedAttributeFoo:'@attributeFoo',
            //emrPatientChartOptions: '=options',//this is readed from the controller
            // isolatedExpressionFoo:'&'
        },

        link: {

            //this method executes when the link function has started
            pre: function preLink($scope, $iElement, $iAttrs, $controller) {

            },
            //after compilation/binding of the data has completed this method is executed
            post: function postLink($scope, $iElement, $iAttrs, $controller) {

                //on destroy clearing the events on nodes and removing the elements from the DOM
                //$iElement.on('$destroy', function () {

                //    ehrDirectiveElementsOnDestroyEvent($iElement);
                //});

            }
        },
    })
}).controller('CoursesController', ["$scope", function ($scope) {

    $scope.mainViewPageInit = function () {
        $scope.Courses = ["C#", "Java Script", "Angular", "SQL"];
    }

    $scope.mainViewPageInit();

}]);
