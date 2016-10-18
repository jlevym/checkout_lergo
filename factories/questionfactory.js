// this factory get an id and returns the question of that id .it has not been tested 
// and is just a clever copy of lessonFactory
myApp.factory('questionFactory', function(lergoQuestions) {



	thisquestion ={};  // always start a factory, and return an object
    var questions = qfac.questions;
 
 		// aquestion is called by oneQuestionController, which passes in the id of the chosen question
        
    	aquestion = function (thisquestionid) { 
    	for(var i= 0; i< questions.length; i++) {
    		if(questions[i]._id == thisquestionid) { // does not work with "" around id
    			thisquestion1 = questions[i];
    			return thisquestion1;
    		}
    	}  
    	
    }
		thisquestion = aquestion;
    	return thisquestion;
})