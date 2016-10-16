myApp.factory('allStats', function(lergoData) {
	stats = {};
	// uses the database in fac

	"use strict";

stats.lessons = fac.lessons;

// FOR LERGO - RETURN VALUE TRUE IF MORE THAN 2 QUESTIONS. 

var lessonWithTwoQuestions = 0; // initializes the total amount of lessons with 2 questions to 0
// countItems checks a lesson to see if there are at least 2 questions returning true / false

var countItems = function(lesson){
        var questionsInLesson = 0;
        for (s in lesson.steps) {
            if(lesson.steps[s].quizItems){ // only dealing with steps that have quiz items. 
                for (q in lesson.steps[s].quizItems ){
                    questionsInLesson +=1;
                        if(questionsInLesson>1){
                            return true;
                        }
                }
            }
        } return false;
}


//THIS SUMS THE AMOUNT OF LESSONS THAT HAVE AT LEAST 2 QUESTIONS 
// by calling the countItems function 
var countLessons = function(){
    for (docs in stats.lessons) {
        if(countItems(stats.lessons[docs])){
            lessonWithTwoQuestions += 1;
        }
    } return lessonWithTwoQuestions ;
}


	stats.countLessons = countLessons();
	return stats;
})