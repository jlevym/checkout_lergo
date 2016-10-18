//landing page for chosen lesson
// currently finds the lesson with that routeParam
myApp.controller('oneLessonController', ['$scope', '$routeParams','lergoData', 'lessonFactory', function($scope, $routeParams, lergoData, lessonFactory  ) {

    var id = $routeParams.id;
    var thislesson = alesson(id);

    $scope.name = 'jeffrey';
    $scope.lessonObj = thislesson;
}]);


