
angular.module('directory.list', [
    'marvel.models.superheroes',
    'directory.list.pagination',
   'marvel.services.path'
    ])

.controller('ListResultCtrl', ['$state','$stateParams', 'SuperHeroesModel','$scope','SuperHeroesService',
function ($state, $stateParams, SuperHeroesModel,$scope,SuperHeroesService) {

        var listResultCtrl = this;
        var limit = $stateParams.limit;
        var offset = $stateParams.offset;
        var search = $stateParams.search;
        //save the information of the current lsit view
        SuperHeroesService.lastState = $state.current.name;
        SuperHeroesService.limit =  $stateParams.limit;
        SuperHeroesService.offset =  $stateParams.offset;
        SuperHeroesService.search =  $stateParams.search;

            SuperHeroesModel.getCharacters(limit, offset, search).
                then( function (superheroes) {
                
                    listResultCtrl.superheroes = superheroes.results;
                    listResultCtrl.total = superheroes.total;
                    listResultCtrl.limit = superheroes.limit;
                    listResultCtrl.count = superheroes.count;
                    listResultCtrl.offset = superheroes.offset;

                    
                });

    }])

