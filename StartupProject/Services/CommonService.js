'use strict';
myApp.service('CommonService', ['$http', '$q', function ($http, $q) {

    this.APIURL = function () { return "http://localhost/WebAPIStartupProject/Students/" };



    this.PostData/*_Angular*/ = function (MethodType, MethodUrl, Data, timeout) {
        var requestTimeout = 60 * 1000;

        //if (hasValue(timeout) && timeout > requestTimeout) {
        //    requestTimeout = timeout;
        //}

        var deferred = $q.defer();

        $http({
            method: MethodType,
            url: MethodUrl,
            data: Data,
            timeout: requestTimeout,
        }).then(successCallback, errorCallback);

        function successCallback(response) {
            //success code
            deferred.resolve(response.data);
        }
        function errorCallback(error) {
           //error code
        }

        //Angular up to 1.4.3
        //success(function (data, responseStatusCode, responseHeaders, responseObjectFromService) {
        //deferred.resolve(data);
        //}).error(function (reason, requestStatusCode, serverConnectionMethod, requestObject) { });

        return deferred.promise;

    };




}]);