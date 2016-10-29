myApp.factory('gradesfactory', function() {
//this factory will get the lesson results and give the total grade
//currenlty being called by playController

grades ={};

		/*var finalArray = $scope.stepresult;*/ // all the results from the lesson
		grades.grade =function (finalArray) {
			var totalquestions = 0;
			var totalcorrect = 0;
			var totalwrong = 0;
			console.log(finalArray);
			for (step in finalArray) {
				console.log("array number :" + step); 
					totalquestions++ ;
					console.log("total amount of questions so far :" + totalquestions);
					if(finalArray[step].result === 1) {
						console.log("correct :" + finalArray[step].result);
						totalcorrect++;
					}else {
						totalwrong++
						console.log('wrong answer');
					}
				/*}*/
			}
			var grade = 100*totalcorrect/totalquestions;
			var finalgrade = grade.toString();
			console.log(finalgrade);
			return grade;
		}

		return grades;

})