//landing page for chosen lesson
// currently finds the lesson with that routeParam
myApp.controller('oneLessonController', ['$scope', '$routeParams','lergoData', 'lessonFactory', function($scope, $routeParams, lergoData, lessonFactory  ) {

    var id = $routeParams.id;
    var thislesson = alesson(id); // this sends the request for one lesson from lessonfactory

    $scope.name = 'jeffrey';
    $scope.lessonObj = thislesson;
    console.log(thislesson);


    //this is helper code that can be removed
   /* function showdetailsofsteps() {
    	
    		
    		for(step in thislesson.steps) {
    			var a = thislesson.steps[step];
    			if( a.type === 'video') {
    				console.log("type = video with url:  " + a.videoUrl);
    			}else if (a.type==='quiz') {
    				console.log("type = quiz with " + a.quizItems.length);
    			}else{
    				console.log('what is ' + step)
    			}
    		
    		
 
    		
    	}
    }*/

    //showdetailsofsteps();
    
}]);


