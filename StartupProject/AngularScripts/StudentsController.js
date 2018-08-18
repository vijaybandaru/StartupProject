'use strict';

myApp.directive('startUpProjectStudents', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: "Templates/Students.html",
        controller: "StudentsController",//controller to bind
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
}).controller('StudentsController', ['$scope', 'StudentService', function ($scope, StudentService) {

    $scope.mainViewPageInit = function () {
        //$scope.students = ["Vijay", "Ravi", "Yaswanth", "Rk"];
        $scope.StudentsGetStudentsList();
    }

    $scope.StudentsGetStudentsList = function () {

        var datatoservice = {

        }

        //StudentService.StudentServiceGetStudetsList(datatoservice).then(function (response) {
        //    $scope.students = response;
        //})

        StudentService.StudentServiceGetStudetsListfromAPI(datatoservice).then(function (response) {
            $scope.students = response;
        })


    }


    $scope.mainViewPageInit();

}]);
