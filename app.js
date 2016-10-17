var myApp = angular.module('myApp',['ngRoute','infinite-scroll']);



myApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/nav.html",
    controller: "lessonController"
  })
  /*.when("/one", {
  	templateUrl: "views/onelesson.html",
  	controller: "oneLessonController"
  })*/
   .when("/one/:id", {
  	templateUrl: "views/onelesson.html",
  	controller: "oneLessonController"
  })
   .when("/play", {
  	templateUrl: "views/playlesson.html",
  	contoller: "playLessonController"
  	
  })
  .when("/it", {
    templateUrl : "views/it.html"
  })
});
