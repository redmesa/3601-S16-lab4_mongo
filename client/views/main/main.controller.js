'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($http){
        console.log("main controller loaded!");

        var self = this;

        self.nameField = "";
        self.weightField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];

        self.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                self.data = pets;
            });
        };

        self.getPets();

        self.addData = function(){
            if(self.nameField.length >= 1 && !isNaN(parseInt(self.weightField))) {
                $http.post('api/pets', {
                    petName: self.nameField,
                    weight: parseInt(self.weightField)
                }).success(function () {
                    self.getPets();
                    console.log("You are here");
                });
                self.nameField = "";
                self.weightField = "";
            } else {
                alert("Invalid Entry! Try again...")
            }
        };

        self.removeData = function(index){
            $http.delete('/api/pets/' + self.data[index]._id).success(function(){
                self.getPets();
            });
        };

        self.cat = function(str1, str2){
            return str1 + str2;
        };

        self.itemsInList = function(){
            return self.data.length;
        };

    });
