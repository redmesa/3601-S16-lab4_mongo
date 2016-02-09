//'use strict';

angular.module('stdComponents').controller('navbarCtl', function($location){
    console.log("Navbar controller loaded!");

    var self = this;

    self.location = $location.path();

    self.textField = "";

    self.pages = [
        {text: "Home", link: '/'},
        {text: "About", link: '/about'},
        {text: "404 Page", link: '/404'}
    ];

    self.isActive = function(route){
        return route === self.location;
    }

});
