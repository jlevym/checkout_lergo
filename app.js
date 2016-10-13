var myApp = angular.module('myApp',[]);

myApp.controller('lessonController',['$scope', 'lergoData', function($scope, lergoData ) {

	$scope.name = 'jeffrey';
    $scope.lessons = fac.lessons;

}]);