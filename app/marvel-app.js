"use strict";
var angular = require('angular');
 require('angular-ui-router');
 require('./directory/directory');

var bulk = require('bulk-require');
bulk(__dirname, [ 'common/services/*.js','common/models/superheroes-model.js' ]);

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