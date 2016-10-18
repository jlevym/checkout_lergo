myApp.controller('oneQuestionController',['$scope', 'lergoData', 'lergoQuestions', '$routeParams', 'lessonFactory',  function($scope, lergoData, lergoQuestions, $routeParams, lessonFactory ) {

// at the moment, I am not using this, using playController

 var id = "53a3e35b693768ba21114790"; /*$routeParams.id;*/
    var thisquestion = aquestion(id); // this sends the request for one lesson from questionFactory

    $scope.name = 'jeffrey';
    $scope.questionObj = thisquestion;
    console.log(questionObj);


}]);