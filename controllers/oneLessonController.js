//landing page for chosen lesson
myApp.controller('oneLessonController', ['$scope', '$routeParams','lergoData',   function($scope, $routeParams, lergoData  ) {

	var thislesson ={};
    $scope.lessons = fac.lessons;
    $scope.thislessonid = $routeParams.id; // has the id of the chosen lesson
    var id = $routeParams.id;
    var a = function () {
    	for(var i= 0; i< $scope.lessons.length; i++) {
    		if($scope.lessons[i]._id == $scope.thislessonid) {
    			thislesson = $scope.lessons[i];
    			 console.log(thislesson);
    			return thislesson;
    		}
    	}
    	
    }
    $scope.lessonObj = a(); // to use the same code for landing page as for individual lesson
}]);


