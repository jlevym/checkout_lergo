myApp.controller('lessonController',['$scope', 'lergoData', 'allStats',  function($scope, lergoData, allStats ) {

	
    $scope.lessons = fac.lessons;
    $scope.goodlessons = stats.countLessons;
    $scope.flag = 'show in landing page';


}]);