var myApp = angular.module('myApp',['ngRoute','infinite-scroll']);



myApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/nav.html",
    controller: "lessonController"
  })
});
