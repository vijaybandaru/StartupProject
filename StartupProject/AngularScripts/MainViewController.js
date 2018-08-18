'use strict';

myApp.directive('startUpProjectMainView', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        //replace: true,
        templateUrl: "./Templates/Mainview.html",
        controller: "MainviewController",//controller to bind
        bindToController: true,//
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
}).controller('MainviewController', ["$scope", function ($scope) {

    $scope.mainViewPageInit = function () {

    }

    $scope.mainViewPageInit();

}]);
