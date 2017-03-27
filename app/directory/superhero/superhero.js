    angular.module('directory.superhero', [
        'marvel.models.superheroes'])
        .config(function ($stateProvider) {
        $stateProvider
            .state('marvel.superhero', {
                name: 'superhero',
                url: '/superhero/:idhero',
                //target the named 'ui-view' in ROOT (eggly) state named 'bookmarks'
                //to show bookmarks for a specific category
                views: {
                    'search@': {
                        controller: 'SearchCtrl as searchCtrl',
                        templateUrl: 'app/directory/directory.tmpl.html'
                    },
                    //target the ui-view named 'list' in ROOT state (marvel)
                    //to show all superhero by page
                     'list@': {
                        controller: 'SuperHeroCtrl as superHeroCtrl',
                        templateUrl: 'app/directory/superhero/superhero.tmpl.html'
                    }

                }
            })
        ;
    })
    .controller('SuperHeroCtrl', function ($state, $stateParams, SuperHeroesModel) {
        var superHeroCtrl = this; 
        var idHero = $stateParams.idhero;
        var SuperHeroes = SuperHeroesModel.getCharacter(idHero).
            then( function (superhero) {
                console.log(superhero);
                superHeroCtrl.superhero = superhero.results[0];
            });
        function goBack(){
            $state.go('marvel.directory')
        }

        superHeroCtrl.goBack = goBack;
   
    });