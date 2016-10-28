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
	$scope.stepresult = {};

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
							console.log('video');
							var thisurl = thistype.videoUrl
							console.log(thisurl);
							var complianturl= thisurl.replace("http://youtu.be", "https://www.youtube.com/embed");
							complianturl = complianturl + '?rel=0'
							console.log(complianturl);
							$scope.videourl = complianturl;
							return 'video';
						}

						else if (thistype.type === 'quiz') {
							console.log('this is a quiz');
							$scope.quizItem = thistype.quizItems[quizindex];
							$scope.question1=aquestion($scope.quizItem);// will return the question from questionsfactory
							var type = $scope.question1.type;
							console.log(type); // will give the type of question
							quizindex++;
							if (quizindex < thistype.quizItems.length) { // tests if we are at the end of the array of questions
								index = index-1;
							}else{ // the question array for this step is over
								$scope.stepresult[index] = quizresultsarray ; // key of each array is the index number
								console.log($scope.stepresult);
								quizresultsarray =  [];
							}
							
							return type;

						}else{ // neither video nor quiz
							return 'need more definitions'; // other than quiz or video so far
						}	

				}else{
					
					$scope.stepresult[index] = quizresultsarray ; //add data to the key 'index' value
					console.log($scope.stepresult);
					quizresultsarray =  [];
					console.log('lesson is over'); // what to do when lesson is over
					$scope.finalgrade = grades.grade(finalArray); // calculated in gradefactory. 
					return 'report';
				}
				
	}
		quizresultsarray = []; //the array that gives the results for each step
    	/*checks the values of the radio button and answer if true / false*/
	   $scope.newValue = function(value) {
			$scope.isDisabled = true;
			$timeout($scope.increment, 1000); // moves to the next question after timeout time	
			   	if(value === 'True'){ // this is the option for True / False
			   		$scope.result = 'good job';
			   		quizresultsarray.push(1);
			   	}else if (value.checked){ // these are the options for multipleChoices
			   		$scope.result = 'good job';
			   		quizresultsarray.push(1);
			   	}else{
			   		$scope.result = 'sorry, that is incorrect' ;
			   		quizresultsarray.push(0);
	   	}
}

	
		var finalArray = $scope.stepresult; // all the results from the lesson
		// the grade for all the questions will be calculated in gradefactory
}]);
