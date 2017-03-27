angular.module('marvelApp', [
    'ui.router',
    'directory'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
            .state('marvel', {
                url: '',
                abstract: true
            })
        ;
        $urlRouterProvider.otherwise('/');
    }).controller('MainCtrl', function ($scope, $state) {
        console.log("hey");
        var mainctrl = this;

        $scope.testclick = function() {

                console.log("send event");
                $scope.$broadcast('eventName', { message: "asdasd" });
            }

        var testclickfn =  function(){

            $scope.$broadcast('eventName', { message: "asdasd" });
        }


        
        
    });