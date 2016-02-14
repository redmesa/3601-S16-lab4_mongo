'use strict';

angular.module("appModule")
.controller('gpaCtrl', function($http){
    console.log("GPA Controller loaded.");

    var self = this;

    self.courseField = "";
    self.gradeField = "";
    self.creditsField = "";

    self.courses = [];

    self.getCourses = function(){
        $http.get('api/gpa').success(function(gpa) {
            self.courses = gpa;
        });
    };

    self.getCourses();

    self.addData = function(){
        if(self.letToNum(self.gradeField) != -1 && !isNaN(parseInt(self.creditsField))) {
            $http.post('api/gpa', {
                name: self.courseField,
                grade: parseInt(self.gradeField),
                credits: parseInt(self.creditsField)

            }).success(function () {
                self.getCourses();
            });
            self.courseField = "";
            self.gradeField = "";
            self.creditsField = "";
        } else {
            alert("Invalid Entry! Try again...") // TODO: Add better alerts here.
        }
    };

    self.removeData = function(index){
        $http.delete('/api/gpa/' + self.data[index]._id).success(function(){
            self.getCourses();
        });
    };

    self.itemsInList = function(){
        return self.courses.length;
    };

    mainControl.getGPA = function() {
        if (self.courses.length == 0) {return "";}

        var GP = 0.00;
        var totalCredits = 0;

        for(var i = 0; i < self.courses.length; i++) {
            totalCredits += parseFloat(self.courses[i].credits);
            GP += self.letToNum(self.courses[i].grade) * parseInt(self.courses[i].credits);
        }

        return (GP/totalCredits).toFixed(2);

    };

    self.letToNum = function(letGrade){
        var letterGrade = letGrade.toUpperCase();

        if (letterGrade == "A") {
            return 4.00;
        } else if (letterGrade == "A-"){
            return 3.66;
        } else if (letterGrade == "B+"){
            return 3.33;
        } else if (letterGrade == "B"){
            return 3.00;
        } else if (letterGrade == "B-"){
            return 2.66;
        } else if (letterGrade == "C+"){
            return 2.33;
        } else if (letterGrade == "C"){
            return 2.00;
        } else if (letterGrade == "C-"){
            return 1.66;
        } else if (letterGrade == "D+"){
            return 1.33;
        } else if (letterGrade == "D"){
            return 1.00;
        } else if (letterGrade == "D-"){
            return 0.66;
        } else if (letterGrade == "F") {
            return 0;
        } else {
            return -1;
        }
    };
});
