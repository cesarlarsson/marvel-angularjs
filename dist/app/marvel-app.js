
'use strict';
require('jquery');
var angular = require('angular');
require('angular-ui-router');

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

        var mainctrl = this;

        $scope.testclick = function() {

                console.log("send event");
                $scope.$broadcast('eventName', { message: "test message" });
            };        
        
    });