//landing page for chosen lesson
// currently finds the lesson with that routeParam
myApp.controller('oneLessonController', ['$scope', '$routeParams','lergoData', 'lessonFactory', function($scope, $routeParams, lergoData, lessonFactory  ) {

    var id = $routeParams.id;
    var thislesson = alesson(id); // this sends the request for one lesson from lessonfactory

    $scope.lessonObj = thislesson;
    console.log(thislesson);
}]);


