var myApp = angular.module('myApp',[]);

myApp.controller('lessonController',['$scope', 'lessonCount', function($scope, $lessonCount ) {

	$scope.name = 'jeffrey';
    $scope.lessons = fac.lessons;
    
}]);