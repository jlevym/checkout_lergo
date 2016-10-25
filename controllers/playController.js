myApp.controller('playLessonController',['$scope', 'lergoData', 'lergoQuestions', '$routeParams', 'lessonFactory', 'questionFactory', '$timeout', function($scope, lergoData, lergoQuestions, $routeParams, lessonFactory , questionFactory, $timeout) {

	// this is the controller for the playlesson.html which plays the lesson.

	// return the lesson with the clicked id
	$scope.lessons = fac.lessons;
    $scope.thislessonid = $routeParams.id;
    $scope.questions = qfac.questions;
   

   	var id = $routeParams.id;  // id of the lesson we want to play
	$scope.thislesson = alesson(id); // this sends the request for one lesson from lessonFactory
	
   
	var index = '-1';  // index of steps in lesson
	var quizindex = '0'; // index for the quizItem in array of questions
	$scope.disabled = 'false'; // allows the user to click on the answer
	$scope.result = 'please choose an answer'; // toggles between choose an answer or the result of the quiz (correct / not correct)
	$scope.url = ''; // video or other presentation url
	$scope.quizid = ''; // id of a question

	// new code
	// define and set variables

	$scope.increment = function() {
	var index = '-1';  // index of steps in lesson
	var quizindex = '0'; // index for the quizItem in array of questions
	$scope.disabled = 'false'; // allows the user to click on the answer
	$scope.result = 'please choose an answer'; // toggles between choose an answer or the result of the quiz (correct / not correct)
	$scope.url = ''; // video or other presentation url
	$scope.quizid = ''; // id of a question
	$scope.options = $scope.lessontype();
	}


		/*var lessontype is the variable that changes depending on the step type (video, quiz etc) */
		 $scope.lessontype = function () { //returns values to playlesson.html
					index++;
					var thistype = $scope.thislesson.steps[index];
					if (thistype)	{ // checks if there is a step at this index
						if (thistype.type === 'video') {
							console.log('video');
							$scope.url = thistype.url
							return 'video';
						}

						else if (thistype.type === 'quiz') {
							console.log('this is a quiz');
							$scope.quizItem = thistype.quizItems[quizindex];
							var thequestion=aquestion($scope.quizItem);// will return the question
							var type = thequestion.type;
							console.log(type); // will give the type of question
							quizindex++;
							if (quizindex < thistype.quizItems.length) {
								index = index-1;
							}
							
							return type;

						}else{
							return 'need more definitions'; 
						}	

				}else{
					console.log('lesson is over'); // what to do when lesson is over
					return 'report';
				}
				
	}

	$scope.options = $scope.lessontype();





	 
	  

    	/*checks the values of the radio button and answer if true / false*/
	    /*$scope.option = 'option3'; */
	   $scope.newValue = function(value) {
	   	$scope.isDisabled = true;
	   	$timeout($scope.increment, 1000); // moves to the next question after timeout time	
	   	if(value === 'True'){ // this is the option for True / False
	   		$scope.result = 'good job';
     		console.log(value);
	   	}else if (value.checked){ // these are the options for multipleChoices
	   		$scope.result = 'good job';
     		console.log(value.checked);
	   	}else{
	   		$scope.result = 'sorry, that is incorrect' ;
	   		console.log(value);
	   	}
}

}]);

