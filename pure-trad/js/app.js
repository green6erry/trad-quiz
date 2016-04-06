$(document).ready(function() {





var game = {
	questions: ["string1", "string2", "string3, stringCheese"],
	questionIndex: 0,
	renderQuestion: function(questionIndex){
		var question = this.questions[questionIndex];
		$('#prompt').html(question);
	},
	quizGo: function(){
		renderQuestion(this.questionIndex);
	},
	nextQuestion: function(){
		var questionIndex = this.questionIndex;
		var questions = this.questions;
		questionIndex++;
		if(questionIndex > questions.length-1){
			questionIndex = questions.length-1;
		}
		quizGo();
	},
	prevQuestion: function(){
		var questionIndex = this.questionIndex;
		questionIndex--;
		if(questionIndex<0){
			questionIndex = 0;
		}
		quizGo();
	},
	quizStart: function(){
		this.questionIndex = 0;
		quizGo();
	}
};





$('#start').click(game.quizStart);
$('#previous').click(game.prevQuestion);
$('#next').click(game.nextQuestion);

$(function() {
    $( "#tabs" ).tabs();
   });

$( "#progressbar" ).progressbar({
  	value: game.questionIndex/game.questions.length
  });

});

// old function based
	// $(document).ready(function() {
		

	// 	var questions = ['<li>string</li>', '<li>string2</li>', "string3"];
	// 	var descriptions = ['<li>descriptions1</li>', '<li>descriptions2</li>', '<li>descriptions3</li>'];
	// 	var questionIndex = 0;


	// 	function renderQuestion(questionIndex){
	// 		var question = questions[questionIndex];
	// 		var	description = descriptions[questionIndex];
	// 		$('#prompt').html(question+description);
	// 	}

	// 	function quizGo(){
	// 		renderQuestion(questionIndex);
	// 	}
		
	// 	function nextQuestion(){
	// 		questionIndex++;
	// 		if(questionIndex > questions.length-1){
	// 			questionIndex = questions.length-1;
	// 		}
	// 		quizGo();
	// 	}

	// 	function prevQuestion(){
	// 		questionIndex--;
	// 		if(questionIndex<0){
	// 			questionIndex = 0;
	// 		}
	// 		quizGo();

	// 	}

	// 	function quizStart(){
	// 		questionIndex = 0;
	// 		quizGo();
	// 	}


		// $('#start').click(quizStart);
		// $('#previous').click(prevQuestion);
		// $('#next').click(nextQuestion);



		// $(function() {
	 //    	$( "#tabs" ).tabs();
	 //    });

	 //    $( "#progressbar" ).progressbar({
	 //  		value: 37
	 //  	});

	// });