var myApp = angular.module('myApp',['infinite-scroll']);

myApp.controller('lessonController',['$scope', 'lergoData', 'allStats',  function($scope, lergoData, allStats ) {

	$scope.name = 'jeffrey';
    $scope.lessons = fac.lessons;
    $scope.goodlessons = stats.countLessons;

}]);