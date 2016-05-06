$(document).ready(function() {

var aGuess = ""; //pull from user guess input 
var Question = {};
var score = 0;
var aFullCount = 0;
var aPartCount = 0;
var aOptions = [];
var qList = [];

var commands1 = {
	qprompt: "You’re climbing with Joe. Joe has lead the climb and is safely anchored above you. You just heard him yell “Your name, OFF BELAY”. What do you say back?",
	aOptions: ['<li class="selectable">Okay, Joe!</li>', '<li class="selectable">Okay, Joe! You are off Belay!</li>', '<li class="selectable">Off belay, Joe!</li>', '<li class="selectable">Hold, Joe!</li>', '<li class="selectable">Aaaaaaaaaand, you are...now off belay, Joe!</li>'],
	aCorrect: aOptions[3],
	aAlt1: aOptions[2],
	aCorrectExplain: 'The next step in this scenario is to tell Joe /"Hold, Joe!/" while you get yourself unclipped and settled, and then follow up with "Off Belay, Joe!" after your gear is secure. Always aim for clear, consice commands.',
	aAlt1Explain: 'This is not bad, but it\'s also not accurate unless you\'re an incredibly fast mover (in which case, I think we\'re all a little surprised you\'re interested in trad).',
	aWrongExplain: 'The correct answer was \"Hold, Joe!\", because that means you are in the process of doing the command they asked. Another acceptable answer would\'ve been \"Off belay, Joe!\", because is the clearest way to respond. '
};







var game = {
	questions: [commands1.qprompt+commands1.aOptions, "string2", "string3", "stringCheese"],
	questionIndex: 0,
	renderQuestion: function(questionIndex){
		var question = this.questions[questionIndex];
		$('#tabs-1').html(question);
	},
	quizGo: function(){
		this.renderQuestion(this.questionIndex);
	},
	nextQuestion: function(){
		var questionIndex = this.questionIndex++;
		var questions = this.questions;
		if(this.questionIndex > questions.length-1){
			this.questionIndex = questions.length-1;
		}
		this.quizGo();
	},
	prevQuestion: function(){
		var questionIndex = this.questionIndex--;
		if(this.questionIndex<0){
			this.questionIndex = 0;
		}
		this.quizGo();
	},
	quizStart: function(){
		this.questionIndex = 0;
		this.quizGo();
	}
	
};





$('#start').click(function (){
	game.quizStart();
});
$('#previous').click(function(){
	game.prevQuestion();
});
$('#next').click(function(){
	game.nextQuestion();
});




// UI Bits

$(function() {
    $( "#tabs" ).tabs();
   });

$( "#progressbar" ).progressbar({
  	value: game.questionIndex/game.questions.length
  });

  $(function() {
    $( "#selectable" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable li" ).index( this );
          result.append( " #" + ( index + 1 ) );
        });
      }
    });
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