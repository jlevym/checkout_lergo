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
 .when("/play/:id/report/:reportid", { /*will be for when invite lessons is operational*/
    templateUrl: "views/playLessonTypes/playlesson.html",
    controller: "playLessonController"
  })
  .when("/it", {
    templateUrl : "views/it.html"
  })
});
