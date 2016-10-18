myApp.controller('playLessonController',['$scope', 'lergoData', 'lergoQuestions', '$routeParams',  function($scope, lergoData, lergoQuestions, $routeParams ) {


	$scope.lessons = fac.lessons;
    $scope.thislessonid = $routeParams.id;
    $scope.questions = qfac.questions;
   	$scope.name = "jeffrey";


    

    

}]);