myApp.factory('lergoQuestions', function() {

	/*LARGE COPY OF LERGO Questions DATABASE*/

/* lergoQuestions first needs to define the functions in the database (ObjectId etc) so as not
to get errors. As soon as we are using Node, it should go away.
currently i have copied a large database from my local host
qfac is the singleton which is available everywhere */	

	qfac = {};

var ObjectId = function (num) {
	return num;
}

var NumberLong = function (num) {
	return num;
}

var ISODate = function (num) {
	return num;
}

   qfac.questions = [

	{
		"_id" : ObjectId("536a8c9bd3be723956c85634"),
		"userId" : ObjectId("53aec297f9fcc48f0cfe2f5a"),
		"lastUpdate" : NumberLong("1399646007485"),
		"type" : "trueFalse",
		"question" : "The sky is white.",
		"answer" : "False"
	},
	{
		"_id" : ObjectId("536a8ccaebff563b58faf338"),
		"userId" : ObjectId("53aec297f9fcc48f0cfe2f5a"),
		"lastUpdate" : 1404118155481,
		"type" : "multipleChoiceSingleAnswer",
		"question" : "",
		"options" : [
			"1950",
			"1948",
			"1930",
			"1984"
		],
		"answer" : "1948"
	},
	{
		"_id" : ObjectId("536a8e3dd024ceba5ca61896"),
		"userId" : ObjectId("53aec297f9fcc48f0cfe2f5a"),
		"lastUpdate" : 1404118619345,
		"type" : "multipleChoices",
		"question" : "Which of the below are even numbers?",
		"options" : [
			"5",
			{
				"label" : "13"
			},
			{
				"label" : "31"
			},
			{
				"label" : "54",
				"checked" : true
			},
			{
				"label" : "45"
			},
			{
				"label" : "68",
				"checked" : true
			},
			{
				"label" : "86",
				"checked" : true
			}
		],
		"answer" : [ ],
		"helpText" : "",
		"language" : "english",
		"subject" : "math",
		"age" : 7
	},
	{
		"_id" : ObjectId("536b399058903021362dd1ca"),
		"userId" : ObjectId("53aec297f9fcc48f0cfe2f5a"),
		"lastUpdate" : 1404118995976,
		"type" : "exactMatch",
		"question" : "The opposite of hot is ______  .",
		"answer" : "cold",
		"options" : [
			{
				"label" : "cold",
				"checked" : true
			},
			{
				"label" : "Cold",
				"checked" : true
			}
		],
		"language" : "english",
		"subject" : "spelling",
		"age" : 8
	}
	]

	return qfac;

	});