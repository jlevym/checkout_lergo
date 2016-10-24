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
	  	$scope.index = index;
	  	//this will move us to the next question in the array.
	  	$scope.increment = function() {
	  		$scope.index++;
	  		$scope.options = $scope.aoptions(countlessons(3)[$scope.index]);
	  		return $scope.options;
	  	}


	  	$scope.question = countlessons(3)[$scope.index];	
	  	$scope.aoptions = 'type4';
	  	/*var playquestion = function(question) {*/
	  	$scope.aoptions = function(question) {
	  		var thequestion=aquestion(question); //get the question via the questionid
	  		$scope.question1=thequestion;
	  		// firtly, find the type of question
		  	if (thequestion.type === "openQuestion"){
		  		console.log("this is an openquestion");
		  		console.log(thequestion);
		  		return 'type1';	
		  	}else if (thequestion.type === 'trueFalse') {
		  		console.log("this is a true / false question");
		  		return 'type2'
		  	}else if (thequestion.type === 'multipleChoices') {
		  		console.log("this is a multipleChoices question");
		  		return 'type3'
		  	}
		  	else {
		  		console.log('needs definition: this is a type : ' + thequestion.type);
		  		return 'type4';
		  	}
	  	}
	  	//console.log(playquestion(countlessons(3)));

	  	// must have something, like this below, to make the playquestion function run the first time.

	  	
		/*$scope.options = playquestion(countlessons(3)[$scope.index]);*/ // by defining the scope, it causes the function to run
		
		$scope.options = $scope.aoptions($scope.question); 
		




	 /* below is all the code for the truefalsequestion.html*/
	
	/*this will give the first question of the lesson that has quizitems*/
    /*var thisquestion = aquestion(countlessons(3)[0]);*/ // this sends the request for one question from questionFactory

    /*$scope.question1 = thisquestion;*/  // this is just a specific question, not the right one. 


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

