var myApp = angular.module('myApp',['ngRoute','infinite-scroll','ngSanitize']);



myApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/nav.html",
    controller: "alllessonController"
  })
  .when("/play/:id", {
  	templateUrl: "views/playLessonTypes/playlesson.html",
  	controller: "playLessonController"
  })
  /* .when("/one/:id", {
  	templateUrl: "views/onelesson.html",
  	controller: "oneLessonController"
  })*/
  .when("/it", {
    templateUrl : "views/it.html"
  })
});
