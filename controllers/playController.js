myApp.controller('playLessonController',['$scope', 'lergoData', 'lergoQuestions', '$routeParams', 'lessonFactory', 'questionFactory', function($scope, lergoData, lergoQuestions, $routeParams, lessonFactory , questionFactory) {

	// this is the controller for the playlesson.html which plays the lesson.

	// return the lesson with the clicked id
	$scope.lessons = fac.lessons;
    $scope.thislessonid = $routeParams.id;
    $scope.questions = qfac.questions;
   

   	var id = $routeParams.id;  // id of the lesson we want to play
	$scope.thislesson = alesson(id); // this sends the request for one lesson from lessonFactory
	
    // this looks for all the questions in a lesson step given by the countlessons(lessonstep) below;
	var thislesson = $scope.thislesson;
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
	

	// 1 . making the array of questions numbers but each step erases the previous step data
	/*(function test () { // this IIFE runs / calls all the steps to get all the questions
		console.log('this is is a test of IIFE');
		for (step in steps) {
			console.log("the below is countlessons(" + steps + ")");
			console.log(countlessons(step));
		}
	  })();*/
	  

	  // play countlessons(3)
	  	var index = 0;
	  	$scope.index = index; // the question in the array of questions
	  	//this will move us to the next question in the array.
	  	$scope.increment = function() {
	  		$scope.isDisabled = false; //need to reset the disabled flag every question
	  		$scope.index++;
	  		$scope.options = $scope.aoptions(countlessons(3)[$scope.index]);
	  	}


	  	$scope.question = countlessons(3)[$scope.index]; // still working with a specific example from  	
	  	/*$scope.aoptions = 'type4';*/
	  	
	  	$scope.aoptions = function(question) {
	  		var thequestion=aquestion(question); //get the question via the questionid
	  		$scope.question1=thequestion;
	  		// firtly, find the type of question
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
		

    // checks the answer from a true / false and gives the result
    // extracting the value of the clicked radio button

    	
    	$scope.isDisabled = false; // prevent answering the lesson twice
    	$scope.result = 'please choose an answer';

    	/*checks the values of the radio button and answer if true / false*/
	    /*$scope.option = 'option3'; */
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

