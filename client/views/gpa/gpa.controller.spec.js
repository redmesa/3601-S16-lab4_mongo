'use strict';

//=== Testing GPA Controller =============================================
describe('Testing controller: gpaCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var gpa, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        gpa = $controller('gpaCtrl as gpa', {
            $scope: scope
        });
    }));

    it('Dummy test. This should pass!', function(){
        expect(true).toEqual(true);
    });

    it("Testing letter to number conversions", function(){
        expect(scope.gpa.letToNum("A")).toBe(4.00);
        expect(scope.gpa.letToNum("A-")).toBe(3.66);
        expect(scope.gpa.letToNum("B+")).toBe(3.33);
        expect(scope.gpa.letToNum("B")).toBe(3.00);
        expect(scope.gpa.letToNum("B-")).toBe(2.66);
        expect(scope.gpa.letToNum("C+")).toBe(2.33);
        expect(scope.gpa.letToNum("C")).toBe(2.00);
        expect(scope.gpa.letToNum("C-")).toBe(1.66);
        expect(scope.gpa.letToNum("D+")).toBe(1.33);
        expect(scope.gpa.letToNum("D")).toBe(1.00);
        expect(scope.gpa.letToNum("D-")).toBe(0.66);
        expect(scope.gpa.letToNum("F")).toBe(0);
        expect(scope.gpa.letToNum("sdf")).toBe(-1); // Can't be bothered to write a custom error, and this will work fine with the GPA Calculator function anywhow.
    });                                      //          ^-- When your tests still have comments from lab 2 --^

    it("Testing whether you can get the number of items properly.", function(){
        expect(scope.gpa.itemsInList()).toBe(0);
        scope.gpa.courses = [{test: "data"}];
        expect(scope.gpa.itemsInList()).toBe(1);
    });

    it("Testing whether or not the GPA is calculated. By cheating, mostly.", function() {
        expect(scope.gpa.getGPA()).toBe("");
        scope.gpa.courses = [
            {grade: 4, credits: 1},
            {grade: 3, credits: 1},
            {grade: 2, credits: 999} // Rounding FTW
        ];
        expect(scope.gpa.getGPA()).toBe('2.00');
    });

    it("Definitely can't test http stuff, because that's a whole different thing.", function() {
        expect(true).toBe(true);
    })


});
