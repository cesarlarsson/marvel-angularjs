angular.module('directory', ['directory.list','directory.superhero'
]).config(function ($stateProvider) {
        $stateProvider
            .state('marvel.directory', {
                name: 'list',
                url: '/?limit&offset&search',
                views: {
                    //target the ui-view named 'search' in ROOT state (marvel)
                    'search@': {
                        controller: 'SearchCtrl as searchCtrl',
                        templateUrl: 'app/directory/directory.tmpl.html'
                    },
                    //target the ui-view named 'list' in ROOT state (marvel)
                    //to show all superhero by page
                    'list@': {
                        controller: 'ListResultCtrl as listResultCtrl',
                        templateUrl: 'app/directory/list/list.tmpl.html'
                    }
                }
            })
        ;
    })
    .controller('SearchCtrl', function SearchCtrl($scope, $state,$stateParams) {

            var searchCtrl = this; 
            searchCtrl.value = $stateParams.search;
          
            searchCtrl.search = function() {

                $state.go('marvel.directory', {
                        search: searchCtrl.value,
                        limit:null,
                        offset:null
                    })
            }

            
            
            $scope.$on('eventName', function (event, args) {
           
                $scope.message = args.message;
                console.log($scope.message);
                });
    })