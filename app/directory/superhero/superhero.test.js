describe('directory.superhero module', function() {
    
    var $rootScope, $state, $injector, myServiceMock, state = 'myState';
    var SuperHeroesModel, SuperHeroesService;
    beforeEach(module('ui.router'));
    beforeEach(function(){
        //angular.module('marvel.services.path',[]);
        angular.mock.module('marvel.services.path');
       // angular.module('marvel.models.superheroes',[]);
        module('directory.superhero');
        
    });



      describe('view1 controller', function(){
            var a;
            beforeEach(function(){
                module('marvel.models.superheroes');

            });
/*             beforeEach(inject(function($controller,$rootScope,$state, $stateParams, SuperHeroesModel, SuperHeroesService) {
                scope = $rootScope.$new();
                view2Ctrl = $controller('View2Ctrl', {$scope:scope});
                httpBackend =$httpBackend;
              }));
              
*/
/*                 beforeEach(inject(function( _SuperHeroesModel_, _SuperHeroesService_) {
                    SuperHeroesModel =_SuperHeroesModel_;
                    SuperHeroesService =_SuperHeroesService_;
                }))
            
             it('should ....', inject(function($controller) {
              //spec body
              var view1Ctrl = $controller('SuperHeroCtrl',{ SuperHeroesModel: SuperHeroesModel , SuperHeroesService:SuperHeroesService });
              expect(view1Ctrl).toBeDefined();
            }));   */
    

            beforeEach(inject(function(_$controller_, _$rootScope_, _SuperHeroesModel_, _SuperHeroesService_){
                //$scope = $rootScope.$new();
                SuperHeroesModel= _SuperHeroesModel_;
                SuperHeroesService =  _SuperHeroesService_;
            
/*                 spyOn($modal, 'method');
                spyOn(Point, 'method'); */
            
                $controller = _$controller_('SuperHeroCtrl', { SuperHeroesModel: SuperHeroesModel , SuperHeroesService:SuperHeroesService });
              }));

              it('should ....', inject(function($controller) {
                //spec body
               /// var view1Ctrl = $controller('SuperHeroCtrl',{ SuperHeroesModel: SuperHeroesModel , SuperHeroesService:SuperHeroesService });
                expect($controller).toBeDefined();
              }));

            it("and so is a spec", function() {
              a = true;
          
              expect(a).toBe(true);
            });
    
      });
    
    
    
      });