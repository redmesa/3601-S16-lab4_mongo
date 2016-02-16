'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl as main', {
            $scope: scope
        });
    }));

    it("Testing whether you can get the number of items properly.", function(){
        expect(scope.main.itemsInList()).toBe(0);
        scope.main.data = [{test: "data"}];
        expect(scope.main.itemsInList()).toBe(1);
    });

    it("Can find the heaviest pet", function(){
        expect(scope.main.getHeaviestPet()).toBe("No pets found!");
        scope.main.data = [
            {petName: "Jan", weight: 10},
            {petName: "Marcia", weight: 20},
            {petName: "Cindy", weight: 5},
        ];
        expect(scope.main.getHeaviestPet()).toBe("Name: Marcia, Weight: 20")
    });

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

});
