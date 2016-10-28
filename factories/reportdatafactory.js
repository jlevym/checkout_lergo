myApp.factory('reportdata', function() {
	report = {};




  quizresultsarray = {} ; //the array that gives the results for each step
    	/*checks the values of the radio button and answer if true / false*/
  $scope.newValue = function(value) {
			$scope.isDisabled = true;
			$timeout($scope.increment, 1000); // moves to the next question after timeout time	
			   	if(value === 'True'){ // this is the option for True / False
			   		$scope.result = 'good job';
			   		quizresultsarray.quid = $scope.quizItem;
			   		quizresultsarray.result= 1;			   		
			   		quizresultsarray.answer= value;
			   	}else if (value.checked){ // these are the options for multipleChoices
			   		$scope.result = 'good job';
			   		quizresultsarray.quid = $scope.quizItem;
			   		quizresultsarray.result= 1;
			   		quizresultsarray.answer= value;
			   	}else{
			   		$scope.result = 'sorry, that is incorrect' ;
			   		quizresultsarray.quid = $scope.quizItem;
			   		quizresultsarray.result= 0;
			   		quizresultsarray.answer= value;
			   	}
			   		
}
		var finalArray = $scope.stepresult; // all the results from the lesson






	return report;
})

/*need to change the way report data is gathered so it will have all information:

resultsofastep = [
	 {
		quizid: question1id,
		quizresult: correct / wrong,
		answer: exact answer given by student
	},
	{
		quizid: question2id,
		quizresult: correct / wrong,
		answer: exact answer given by student
	},
	{
		quizid: question2id,
		quizresult: correct / wrong,
		answer: exact answer given by student
	}
]

resultsofanotherstep = [
	 {
		quizid: question1id,
		quizresult: correct / wrong,
		answer: exact answer given by student
	},
	{
		quizid: question2id,
		quizresult: correct / wrong,
		answer: exact answer given by student
	},
	{
		quizid: question2id,
		quizresult: correct / wrong,
		answer: exact answer given by student
	}
]

allresults = {
	firststepresults: resultsofastep,
	secondstepresults: resultsofanotherstep
}*/