myApp.controller('playLessonController',['$scope', 'lergoData', '$routeParams',  function($scope, lergoData, $routeParams ) {

	
    $scope.lessons = fac.lessons;
    $scope.thislessonid = $routeParams.id;

    

}]);