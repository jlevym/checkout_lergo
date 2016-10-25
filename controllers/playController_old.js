myApp.controller('playLessonController',['$scope', 'lergoData', 'lergoQuestions', '$routeParams', 'lessonFactory', 'questionFactory', '$timeout', function($scope, lergoData, lergoQuestions, $routeParams, lessonFactory , questionFactory, $timeout) {

	// this is the controller for the playlesson.html which plays the lesson.

	// return the lesson with the clicked id
	$scope.lessons = fac.lessons;
    $scope.thislessonid = $routeParams.id;
    $scope.questions = qfac.questions;
   

   	var id = $routeParams.id;  // id of the lesson we want to play
	$scope.thislesson = alesson(id); // this sends the request for one lesson from lessonFactory
	
    // this looks for all the questions in a lesson step given by the countlessons(lessonstep) below;
	var thislesson = $scope.thislesson;
	console.log(thislesson);
	var steps = thislesson.steps;

	// this is an empty array to keep all the steps / questions but only of 1 step
	var questions = []; 


	// this function below will extact the questions from the passed in step of the lesson
	// and make an array for that step called questions
	var countlessons = function (step) { /*we pass in the step number we want*/
				if(steps[step].quizItems) {
					for (quizItem in steps[step].quizItems){
						questions.push( steps[step].quizItems[quizItem] ); // this pushes to array
					}
			}else {
				return 'no quizItems in this step';
			}
		return questions; // the array of questions for this step
		}
	

	  // play countlessons(3)
	  	var index = 0;
	  	$scope.index = index; // the question in the array of questions
	  	//this will move us to the next question in the array.
	  	$scope.increment = function() {
	  		$scope.isDisabled = false; //need to reset the disabled flag every question
	  		$scope.result = 'please choose an answer'; // need to reset the result before every question
	  		$scope.index++;
	  		$scope.options = $scope.aoptions(countlessons(3)[$scope.index]);
	  	}
	  	$scope.question = countlessons(3)[$scope.index]; // still working with a specific example from  	
	  	

	  	//aoptions gets a question id and checks what type of question it is.
	  	// the result is used by the ng-include in playlesson.html to get the correct question view by type. 
	  	$scope.aoptions = function(question) {
	  		var thequestion=aquestion(question); //get the question via the questionid
	  		$scope.question1=thequestion;
		  	if (thequestion.type === "openQuestion"){
		  		return 'type1';	
		  	}else if (thequestion.type === 'trueFalse') {
		  		return 'type2'
		  	}else if (thequestion.type === 'exactMatch') {
		  		return 'type4'
		  	}else if (thequestion.type === 'multipleChoices') {
		  		return 'type3'
		  	}else if (thequestion.type === 'fillInTheBlanks') {
		  		return 'type5'
		  	}
		  	else {
		  		console.log('needs definition: this is a type : ' + thequestion.type);
		  		return 'type9';
		  	}
	  	}
	  	
		$scope.options = $scope.aoptions($scope.question); // for the first question before we do 'increment'
		

    // starting true / false and also multipleChoices
    	
    	$scope.isDisabled = false; // prevent answering the lesson twice
    	$scope.result = 'please choose an answer';

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

