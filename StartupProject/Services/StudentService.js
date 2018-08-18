'use strict';
myApp.service('StudentService', ['$http', '$q', 'CommonService', function ($http, $q, CommonService) {

    this.StudentServiceGetStudetsList = function () {
        var deferred = $q.defer();
        var studentsViewModel = [];

        studentsViewModel.push({
            StudentID: "1",
            StudentName: "Vijay"
        });

        studentsViewModel.push({
            StudentID: "2",
            StudentName: "RK"
        });
        studentsViewModel.push({
            StudentID: "3",
            StudentName: "Sanjay"
        });
        studentsViewModel.push({
            StudentID: "4",
            StudentName: "Poosarla"
        });
        studentsViewModel.push({
            StudentID: "5",
            StudentName: "Yaswanth"
        });
        studentsViewModel.push({
            StudentID: "6",
            StudentName: "Gautham"
        });

        deferred.resolve(studentsViewModel);

        return deferred.promise;
    }

    this.StudentServiceGetStudetsListfromAPI = function (PostData) {

        return CommonService.PostData('POST', CommonService.APIURL() + "GetStudentsList", PostData).then(function (result) {
            return result;
        });
    }


}]);