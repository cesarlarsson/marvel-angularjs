describe('directory.superhero module', function() {
    
    var $rootScope, $state, $injector, myServiceMock, state = 'myState';
    var SuperHeroesModel, SuperHeroesService;
    beforeEach(module('ui.router'));
    beforeEach(function(){
        angular.mock.module('marvel.services.path');
        module('directory.superhero');
        
    });



      describe('view1 controller', function(){
            var a;
            beforeEach(function(){
                module('marvel.models.superheroes');
            });

            beforeEach(inject(function(_$controller_, _$rootScope_, _SuperHeroesModel_, _SuperHeroesService_){

                SuperHeroesModel= _SuperHeroesModel_;
                SuperHeroesService =  _SuperHeroesService_;
                $controller = _$controller_('SuperHeroCtrl', { SuperHeroesModel: SuperHeroesModel , SuperHeroesService:SuperHeroesService });
              }));

              it('should ....', inject(function($controller) {
                expect($controller).toBeDefined();
              }));
    
      });
    
    
    
      });