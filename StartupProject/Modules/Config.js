'use strict';
myApp.config(function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $stateProvider.state("home", {
        url: "/home",
        templateUrl: "./Templates/Mainview.html",
        controller: "MainviewController",
        // controllerAs: "homeCtrl",
        data: {
            customData1: "Home State Custom Data1",
            customData2: "Home State Custom Data2",
        }
    })
    .state("students", {
        url: "/students",
        //templateUrl: "./Templates/students.html",
        //controller: "StudentsController",
        //controllerAs: "studentsCtrl"
        template: "<div start-up-project-students>hi transclude html</div>"
    })
    .state("courses", {
        url: "/courses",
        templateUrl: "./Templates/Courses.html",
        controller: "CoursesController",
        // controllerAs: "cousesCtrl"
    })
    .state("ToDoList", {
        url: "/ToDoList",
        templateUrl: "./Templates/ToDoList.html",
        controller: "ToDoListController",
        // controllerAs: "cousesCtrl"
    })
    .state("Facebook", {
        url: "/Facebook",
        templateUrl: "./Templates/Facebook.html",
        controller: "FacebookController",
        // controllerAs: "cousesCtrl"
    })
    .state("Google", {
        url: "/Google",
        templateUrl: "./Templates/Google.html",
        controller: "GoogleController",
        // controllerAs: "cousesCtrl"
    })
    .state("Bootstrap", {
        url:"/Bootstrap",
        templateUrl:"/Templates/Bootstrap.html",
        controller:"BootstrapController",
    })
})
