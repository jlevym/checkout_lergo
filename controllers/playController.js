myApp.controller('playLessonController',['$scope', 'lergoData', 'lergoQuestions', '$routeParams', 'lessonFactory', 'questionFactory', function($scope, lergoData, lergoQuestions, $routeParams, lessonFactory , questionFactory) {

	// this is the controller for the playlesson.html which plays the lesson.

	// return the lesson with the clicked id
	$scope.lessons = fac.lessons;
    $scope.thislessonid = $routeParams.id;
    $scope.questions = qfac.questions;
   

   	var id = $routeParams.id;
	$scope.thislesson = alesson(id); // this sends the request for one lesson from lessonFactory
	console.log( 'this lesson from playconroller.js');
	console.log($scope.thislesson);	 // prints out the lesson in the console. 

    // this looks for all the questions in a lesson step given by the countlessons(lessonstep) below;
	var thislesson = $scope.thislesson;
	var steps = thislesson.steps;
	var questions = []; // this is an array to keep all the steps / questions


	// this function below will extact the questions from the passed in step of the lesson
	// and make an array for that step called questions
	// the next step is to play this array
	var countlessons = function (step) { /*we pass in the step number we want*/
				if(steps[step].quizItems) {
					for (quizItem in steps[step].quizItems){
						questions.push( steps[step].quizItems[quizItem] ); // this pushes to array
					}
			}else {
				return 'no quizItems in this step';
			}
		return questions;
		}




	console.log("the first one :" + countlessons(2)); // returns the quizitems in the step 

	(function test () { // this IIFE runs / calls all the steps to get all the questions
		console.log('this is is a test of IIFE');
		for (step in steps) {
			console.log(countlessons(step));
		}
	  })();
		




	 /* below is all the code for the truefalsequestion.html*/




	// lets also get an example question from a given id. maybe this is  supposed to be moved to 
	//questionController.js

	var id = '536a8c9bd3be723956c85634'; /*$routeParams.id;*/
    var thisquestion = aquestion(id); // this sends the request for one lesson from questionFactory

    $scope.question1 = thisquestion;
    console.log( 'this question from playconroller.js');
    console.log(thisquestion); 








    // what we really need to do is find all the steps and questions from the lesson above and start 
    // building the ui for a question

    // extracting the value of the clicked radio button

    	// prevent answering the lesson twice
    	$scope.isDisabled = false;
    	$scope.result = 'please choose an answer';

    	/*checks the values of the radio button and answer if true / false*/
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

