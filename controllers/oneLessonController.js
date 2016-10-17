//landing page for chosen lesson
// currently finds the lesson with that routeParam
myApp.controller('oneLessonController', ['$scope', '$routeParams','lergoData', 'lessonFactory', function($scope, $routeParams, lergoData, lessonFactory  ) {

	/*var thislesson ={};
    $scope.lessons = fac.lessons;*/
   /* $scope.thislessonid = $routeParams.id; // has the id of the chosen lesson
    var id = $routeParams.id;*/
   /* var a = function () {
    	for(var i= 0; i< $scope.lessons.length; i++) {
    		if($scope.lessons[i]._id == $scope.thislessonid) {
    			thislesson = $scope.lessons[i];
    			 console.log(thislesson);
    			return thislesson;
    		}
    	}
    	
    }*/

    var id = $routeParams.id;
    var thislesson = alesson(id)
    console.log(thislesson);

    //$scope.lessonObj = a(); // to use the same code for landing page as for individual lesson
    $scope.lessonObj = thislesson;
}]);


