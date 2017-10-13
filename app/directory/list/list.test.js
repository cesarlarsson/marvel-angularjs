describe('directory.list module', function() {
    
    var scope;
    var ListResultCtrl;
    var httpBackend;
    var SuperHeroesModel;




    beforeEach(module('directory.list'));
    beforeEach(module('ui.router'));
    // inject the required services and instantiate the controller
    beforeEach(inject(function($rootScope, $controller,_SuperHeroesModel_,_SuperHeroesService_, $httpBackend) {
        scope = $rootScope.$new();
        SuperHeroesModel = _SuperHeroesModel_;
        ListResultCtrl = $controller('ListResultCtrl', {
            $scope: scope,
            SuperHeroesModel: _SuperHeroesModel_,
            SuperHeroesService: _SuperHeroesService_
        });
        httpBackend = $httpBackend;
    }));



      describe('SuperHeroesModel service', function(){
            var a;
            it("and so is a spec", function() {
              a = true;
              expect(a).toBe(true);
            });
      });
    
    
    
  });