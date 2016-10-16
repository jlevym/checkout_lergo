var myApp = angular.module('myApp',['ngRoute','infinite-scroll']);



myApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/main.html",
    controller: "lessonController"
  })
});
