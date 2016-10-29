myApp.controller('playLessonController',['$scope', 'lergoData', 'lergoQuestions', '$routeParams', 'lessonFactory', 'questionFactory', '$timeout', '$sce', 'gradesfactory',  function($scope, lergoData, lergoQuestions, $routeParams, lessonFactory , questionFactory, $timeout, $sce, gradesfactory) {

	// need this to allow playing external videos
	$scope.trustSrc = function(src) {
    	return $sce.trustAsResourceUrl(src);
  }

	// return the lesson with the clicked id
    $scope.questions = qfac.questions; // access to all the questions
   

   	var id = $routeParams.id;  // id of the lesson we want to play
	$scope.thislesson = alesson(id); // this sends the request for one lesson from lessonFactory
	$scope.lessonObj = $scope.thislesson;
   
	var index = '-1';  // index of steps in lesson
	var quizindex = '0'; // index for the quizItem in array of questions
	$scope.isDisabled = false; // allows the user to click on the answer
	$scope.result = 'please choose an answer'; // toggles between choose an answer or the result of the quiz (correct / not correct)
	$scope.options = '';
	$scope.stepresult = [];

	// define and set variables everytime increment is called. 
	$scope.increment = function() {
		var index = '-1';  // index of steps in lesson
		var quizindex = '0'; // index for the quizItem in array of questions
		$scope.isDisabled = false; // allows the user to click on the answer
		$scope.result = 'please choose an answer'; // toggles between choose an answer or the result of the quiz (correct / not correct)
		$scope.options = lessontype();
	}
		/*var lessontype is the variable that changes depending on the step type (video, quiz etc) */
		 var lessontype = function () { //returns values to playlesson.html
					index++;
					var thistype = $scope.thislesson.steps[index];
					if (thistype)	{ // checks if there is a step at this index
						if (thistype.type === 'video') {
							var thisurl = thistype.videoUrl
							var complianturl= thisurl.replace("http://youtu.be", "https://www.youtube.com/embed");
							complianturl = complianturl + '?rel=0' // so that it will not show advertizements at end
							$scope.videourl = complianturl;
							return 'video';
						}
						else if (thistype.type === 'quiz') {
							$scope.quizItem = thistype.quizItems[quizindex]; //$scope.quizItem is the id of the question
							$scope.question1=aquestion($scope.quizItem);// will return the question from questionsfactory
							var type = $scope.question1.type; // finds what kind of quiz it is 
							quizindex++;
							if (quizindex < thistype.quizItems.length) { // tests if we are at the end of the array of questions
								index = index-1; // if not at the end, we want to stay on the same step
							}else{ // the question array for this step is over
								var newArray = $scope.stepresult.concat(arrayresult);
								$scope.stepresult = newArray ; 
								console.log($scope.stepresult);
								arrayresult = [];
							}
							return type;
							var newArray = arrayA.concat(arrayB);

						}else{ // neither video nor quiz
							return 'need more definitions'; // other than quiz or video so far
						}	
				}else{
					var newArray = $scope.stepresult.concat(arrayresult);
					$scope.stepresult = newArray ; 
					arrayresult =  [];
					console.log('lesson is over'); // what to do when lesson is over
					console.log($scope.stepresult);
					$scope.finalgrade = grades.grade(finalArray); // calculated in gradefactory. 
					return 'report';
				}
				
	}
		quizresult = {}; //the array that gives the results for each step
		arrayresult =[];
		/*this is the new code i want to test*/
    	/*checks the values of the radio button and answer if true / false*/
  			$scope.newValue = function(value) {
  				quizresult=[];
				$scope.isDisabled = true;
				$timeout($scope.increment, 1000); // moves to the next question after timeout time	
				   	if(value === 'True'){ // this is the option for True / False
				   		$scope.result = 'good job';
				   		quizresult.quid = $scope.quizItem; // the question id
				   		quizresult.result= 1;			   // 1 = correct		
				   		quizresult.answer= value.label;		   // the answer given
				   		arrayresult.push(quizresult);		// arrayresult holds the objects in an array
				   		console.log(arrayresult);
				   	}else if (value.checked){ // these are the options for multipleChoices
				   		$scope.result = 'good job';
				   		quizresult.quid = $scope.quizItem;
				   		quizresult.result= 1;
				   		quizresult.answer= value.label;
				   		arrayresult.push(quizresult);
				   		console.log(arrayresult);
				   	}else{
				   		$scope.result = 'sorry, that is incorrect' ;
				   		quizresult.quid = $scope.quizItem;
				   		quizresult.result= 0;
				   		quizresult.answer= value.label;
				   		arrayresult.push(quizresult);
				   		console.log(arrayresult);
				   	}
				   		
			} // end of new code I want to test
	


		var finalArray = $scope.stepresult; // all the results from the lesson
		// the grade for all the questions will be calculated in gradefactory
		/*$scope.question(id)=function (id) {
			return aquestion(id);
		}*/
}]);

