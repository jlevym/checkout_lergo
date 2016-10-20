myApp.controller('playLessonController',['$scope', 'lergoData', 'lergoQuestions', '$routeParams', 'lessonFactory', 'questionFactory', function($scope, lergoData, lergoQuestions, $routeParams, lessonFactory , questionFactory) {

	// this is the controller for the playlesson.html which plays the lesson.

	// return the lesson with the clicked id
	$scope.lessons = fac.lessons;
    $scope.thislessonid = $routeParams.id;
    $scope.questions = qfac.questions;
   

   	var id = $routeParams.id;
	$scope.thislesson = alesson(id); // this sends the request for one lesson from lessonFactory
	console.log($scope.thislesson);	 // prints out the lesson in the console. 

    
	// lets also get an example question from a given id. I think we are supposed to do this in 
	//questionController.js

	var id = '536a8c9bd3be723956c85634'; /*$routeParams.id;*/
    var thisquestion = aquestion(id); // this sends the request for one lesson from questionFactory

    $scope.question1 = thisquestion;
    console.log(thisquestion); 

    // what we really need to do is find all the steps and questions from the lesson above and start 
    // building the ui for a question

    // extracting the value of the clicked radio button

    	$scope.isDisabled = false;
    	$scope.result = 'please choose an answer';

	    $scope.option = 'option3'; 
	   $scope.newValue = function(value) {
	   	$scope.isDisabled = true;
	   	if(value=='option1'){
	   		$scope.result = 'sorry, that is incorrect';
     		console.log(value);
	   	}else{
	   		$scope.result = 'good job';
	   	}
}

}]);

