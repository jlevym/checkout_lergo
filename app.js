var myApp = angular.module('myApp',['ngRoute','infinite-scroll']);



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
   .when("/one/:id", {
  	templateUrl: "views/onelesson.html",
  	controller: "oneLessonController"
  })
   /*.when("/play/:id", {
  	templateUrl: "views/playlesson.html",
  	contoller: "playLessonController"
  	
  })*/
  .when("/it", {
    templateUrl : "views/it.html"
  })
});
