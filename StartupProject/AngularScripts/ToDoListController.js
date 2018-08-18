'use strict';

myApp.directive('startUpProjectToDoList', function () {
    return ({
        restrict: 'AE',
        transclude: true,
        replace: true,
        templateUrl: "Templates/ToDoList.html",
        controller: "ToDoListController",//controller to bind
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
}).controller('ToDoListController', ['$scope', function ($scope) {

    $scope.mainViewPageInit = function () {
        
    }

    $scope.newElement = function () {
        
        if($scope.TodoValue === "" || $scope.TodoValue == null){
            alert("Write Something!");
            $("#TodoListTextbox").focus();
            return;
        }

        var newliElement = document.createElement("li");
        var inputValue = $scope.TodoValue;
        var node = document.createTextNode(inputValue);

        newliElement.appendChild(node);

        $("#myUL")[0].appendChild(newliElement); 
        $scope.TodoValue = "";

        //Creating Delete Icon after every li item
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        newliElement.appendChild(span);

        $("#TodoListTextbox").focus();

    }

    $('ul').on('click', '.close', function() {
        // var Element = $(this)[0].parentElement;
        // Element.style.display = "none";
        $(this)[0].parentElement.remove();
    });

    $scope.mainViewPageInit();

}]);
