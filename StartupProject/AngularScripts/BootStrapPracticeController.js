'use strict';
myApp.directive("startUpProjectBootStrapPractice", function(){
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: "Templates/BootstrapPractice.html",
        controller: "BootStrapPracticeController",//controller to bind
        // controllerAs:"abc", //Alias name for Scope --- no scope sharing for directive & controller
        bindToController: true,  //Common Scope Sharing
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

                //$iAttrs["vijayleave"]
                //"vijayleavefunction"
                //$eval(vijayleavefunction())
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
}).controller("BootStrapPracticeController", ["$scope", function($scope){

    $scope.BootstrapPracticeMainViewPageInit = function(){

    }


    $scope.BootstrapPracticeMainViewPageInit();

}]);