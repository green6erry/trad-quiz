/* naming key: 
which question - qtypeNum (qKnots1 or qKnots2)
which answer - atymeNum

q = question
a = answer
p = prompt (includes question and answer)
verb or solo letter first = function
*/

//hide all questions

$(document).ready(function() {

var aGuess = ""; //pull from user guess input 
var Question = {};
var score = 0;
var aFullCount = 0;
var aPartCount = 0;
var aOptions = [];
var qList = [];

var commands1 = Object.create(Question);

commands1.qprompt = "You’re climbing with Joe. Joe has lead the climb and is safely anchored above you. You just heard him yell “Your name, OFF BELAY”. What do you say back?";
commands1.aOptions = ['Okay, Joe!', 'Okay, Joe! You are off Belay!', 'Off belay, Joe!', 'Hold, Joe!', 'Aaaaaaaaaand, you are...now off belay, Joe!'];
commands1.aCorrect = aOptions[3];
commands1.aAlt1 = aOptions[2];
commands1.aCorrectExplain = 'The next step in this scenario is to tell Joe /"Hold, Joe!/" while you get yourself unclipped and settled, and then follow up with "Off Belay, Joe!" after your gear is secure. Always aim for clear, consice commands.';
commands1.aAlt1Explain = 'This is not bad, but it\'s also not accurate unless you\'re an incredibly fast mover (in which case, I think we\'re all a little surprised you\'re interested in trad).';
commands1.aWrongExplain = 'The correct answer was \"Hold, Joe!\", because that means you are in the process of doing the command they asked. Another acceptable answer would\'ve been \"Off belay, Joe!\", because is the clearest way to respond. ';




function updateDOM(){
//what I want



	$('#prompt').find('h2').html(commands1.qprompt);
}



function test(){
	console.log(score);
}
test();

function givePartialCredit() {
	score++;
	aPartCount++;
}

function giveFullCredit() {
	score = score = 2;
	aFullCount++;
}

function aFeedback (){
	if (aGuess == aCorrent) {
		//show aCorrectExplain
		giveFullCredit();

	}
	else if (aGuess == aAlt1) {
		//show aAlt1Explain
		givePartialCredit();
	}
	else {
		//show aWrongExplain
	}
}

//$('#prompt').html('<h3>'+q.commnds1.qprompt+'</h3>');


$('.submit').click(function() {
	qNext();
	updateDOM();
	//show first question
	//show control bar, including next and previous buttons
});


$('#back').click(function(){
	$('div.visible').switchClass('visible', 'hidden', 100);
	$('div.visible').prev('div').switchClass('hidden', 'visible', 500);
});

//to walk through the logic
function qNext() {
	$('div.visible').switchClass('visible', 'hidden', 100);
	$('div.visible').next('div').switchClass('hidden', 'visible', 500);
}

$('#next').click(function(){
	qNext();
});

function qPrevious() {
	//show previous question
}

$( ".sortable" ).sortable();
$( ".selectable" ).selectable();

//under construction.
$('#clearSelection').click(function(){
	$('.visible').find(input)
	//set input to unselected.
})




});

