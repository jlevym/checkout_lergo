myApp.factory('gradesfactory', function() {
//this factory will get the lesson results and give the total grade

grades ={};

		/*var finalArray = $scope.stepresult;*/ // all the results from the lesson
		grades.grade =function (finalArray) {
			var totalquestions = 0;
			var totalcorrect = 0;
			var totalwrong = 0;
			for (step in finalArray) {
				console.log(step); // should be zero the first time
				for(answer in finalArray[step]) {
					console.log(finalArray[step]); // should be good job
					console.log(answer) // should be zero the first time
					totalquestions++ ;
					console.log(totalquestions);
					if(finalArray[step][answer] === 1) {
						console.log(finalArray[step][answer]);
						totalcorrect++;
					}else {
						totalwrong++
					}
				}
			}
			var grade = 100*totalcorrect/totalquestions;
			var finalgrade = grade.toString();
			console.log(finalgrade);
			return grade;
		}

		return grades;

})