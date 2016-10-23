myApp.controller('playLessonController',['$scope', 'lergoData', 'lergoQuestions', '$routeParams', 'lessonFactory', 'questionFactory', function($scope, lergoData, lergoQuestions, $routeParams, lessonFactory , questionFactory) {

	// this is the controller for the playlesson.html which plays the lesson.

	// return the lesson with the clicked id
	$scope.lessons = fac.lessons;
    $scope.thislessonid = $routeParams.id;
    $scope.questions = qfac.questions;
   

   	var id = $routeParams.id;  // id of the lesson we want to play
	$scope.thislesson = alesson(id); // this sends the request for one lesson from lessonFactory
	/*console.log( 'this lesson from playconroller.js');
	console.log($scope.thislesson);*/	 // prints out the lesson in the console. 

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
	/*console.log("the first one :" + countlessons(3)); // returns the quizitems in the step 
*/

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
	  	$scope.index = 'index';

	  	var playquestion = function(question) {
	  		var thequestion=aquestion(question[0]); //get the question via the questionid	 
	  		// firtly, find the type of question
		  	if (thequestion.type === "openQuestion"){
		  		console.log("this is an openquestion");
		  		return 'option1';	
		  	}else if (thequestion.type === 'trueFalse') {
		  		console.log("this is a true / false question");
		  		return 'option2'
		  	}else {
		  		console.log('needs definition: this is a type : ' + thequestion.type);
		  		return 'option3';
		  	}
	  	}
	  	//console.log(playquestion(countlessons(3)));


		$scope.options = playquestion(countlessons(3)); // by defining the scope, it causes the function to run
		$scope.name = 'jeff';





	 /* below is all the code for the truefalsequestion.html*/
	
	/*this will give the first question of the lesson that has quizitems*/
    var thisquestion = aquestion(countlessons(3)[0]); // this sends the request for one question from questionFactory

    $scope.question1 = thisquestion;


    /*console.log( 'this question from playconroller.js');
    console.log(thisquestion); */

    // checks the answer from a true / false and gives the result
    // extracting the value of the clicked radio button

    	
    	$scope.isDisabled = false; // prevent answering the lesson twice
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

