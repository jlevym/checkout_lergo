// this factory get an id and returns the lesson of that id
myApp.factory('lessonFactory', function(lergoData) {



	thislesson ={};  // always start a factory, and return an object
    var lessons = fac.lessons;
 
 		// alesson is called by oneLessonController, which passes in the id of the chosen lesson
    	alesson = function (thislessonid) { 
    	for(var i= 0; i< lessons.length; i++) {
    		if(lessons[i]._id == thislessonid) {
    			thislesson1 = lessons[i];
    			return thislesson1;
    		}
    	}  
    	
    }
		thislesson = alesson;
    	return thislesson;
})