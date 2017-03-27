
angular.module('directory.list', [
    'marvel.models.superheroes',
    'directory.list.pagination'
    ])

.controller('ListResultCtrl', ['$stateParams', 'SuperHeroesModel','$scope' ,
function ($stateParams, SuperHeroesModel,$scope) {

        var listResultCtrl = this;
        var limit = $stateParams.limit;
        var offset = $stateParams.offset;
        var search = $stateParams.search;

            SuperHeroesModel.getCharacters(limit, offset, search).
                then( function (superheroes) {
                
                    listResultCtrl.superheroes = superheroes.results;
                    listResultCtrl.total = superheroes.total;
                    listResultCtrl.limit = superheroes.limit;
                    listResultCtrl.count = superheroes.count;
                    listResultCtrl.offset = superheroes.offset;

                    
                });

    }])

