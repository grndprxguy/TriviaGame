// set variables
var correct= 0;
var firstRun = true;
var incorrect= 0;
var skipped= 0;
var currentQuestion = 0;
var timeRemain = 10;
var correctAnswer;
var timerId;
var buttonClick;
// questions and answers
var questions  = [{
	question: "Which US state is named on the label of a Jack Daniels bottle",
	answer: ["New York", "California", "Tennessee", "North Carolina"],
	correct: 2,
},{
	question: "How many feet are there in a fathom",
	answer: ["Six", "Four", "Eight", "Twelve"],
	correct: 0,
}, {
	question: "What type of animal was inside Sputnik 2 when launched into orbit in 1957",
	answer: ["Chimp", "Dog", "Cat", "Mouse"],
	correct: 1,
}, {
	question: "A couple celebrating their crystal wedding anniversary have been married for how many years",
	answer: ["Fifteen", "Five", "Twenty Five", "Thirty"],
	correct: 0,
}, {
	question: "Kodiak Island is in which US state",
	answer: ["Oregon", "Hawaii", "Alaska", "Maine"],
	correct: 2,
}, {
	question: "In the human body what is the hallux",
	answer: ["Forearm", "Big Toe", "Pinky Toe", "Elbow"],
	correct: 1,
}, {
	question: "Which of these is a real variety of Yam",
	answer: ["Sandra", "Amy", "Jessica", "Lucy"],
	correct: 3,
}, {
	question: "The Cassini-Huygens probe was sent to visit which planet",
	answer: ["Jupiter", "Uranus", "Neptune", "Saturn"],
	correct: 3,
}, {
	question: "The Mariana Trench is the deepest point on which planet",
	answer: ["Mars", "Earth", "Venus", "Mercury"],
	correct: 1,
}, {
	question: "Richard Branson founded which major airline",
	answer: ["Quantas", "Southwest Airlines", "Virgin", "Emirates"],
	correct: 1,
}, {
	question: "Which Jessie had a 2011 hit with “Price Tag”",
	answer: ["Jessie J", "Jessie G", "Jessie C", "Jessie D"],
	correct: 0,
}, {
	question: "How many times did Spaniard Seve Ballesteros win The Open",
	answer: ["4", "1", "3", "2"],
	correct: 2,
}, {
	question: "“You know I can’t drink anymore” were the last words of which artist",
	answer: ["Da Vinci", "Botticelli", "Matisse", "Picasso"],
	correct: 3,
}, {
	question: "“If music be the food of love then play on” comes from which Shakespeare play",
	answer: ["Coriolanus", "All’s Well That Ends Well", "Twelfth Night", "Timon of Athens"],
	correct: 2,
}];

// start button to begin
$(document).ready(function() {
	if (firstRun = true) {
	$('#start').on('click',function () {
		$(this).hide();
		firstRun = false;
	showQuestion();	
	})
	}
});

// click event listener
$(document).on("click", "button", function (){
	var highlight = $(this).css("background-color", "yellow");
	buttonClick = $(this).attr("data-id");
	setAnswer();
});

// reset display
var reset = function() {
	clearInterval(timerId);
	$('#question').html("");
	$('#answers').html("");
	$('#image').html("");
	$('#answerStatus').html("");
	timeRemain = 10;
	showQuestion();
};

// countdown timer
function timer() {	
	$("#timer").html("Time remaining: "+ timeRemain + " secs");
	//if time runs out
	if (timeRemain == 0) {
		clearInterval(timerId);
		$('#question').html("<h1>Sorry, Time's up!</h1>");
		$('#answers').html("<h1>The correct answer is "+ questions[currentQuestion].answer[correctAnswer] +"</h1>");
		skipped++;
		newQuestion();
	}
	timeRemain--;	
}

// pull questions and answers from object groups
function showQuestion() {
	$('#correct').text("Correct Answers: " + correct);
	$('#inCorrect').text("Inorrect Answers: " + incorrect);
	$('#skipped').text("Skipped Questions: " + skipped);
	if (currentQuestion < questions.length){
		var question = questions[currentQuestion].question;
		var numAnswers = questions[currentQuestion].answer.length;
		correctAnswer = questions[currentQuestion].correct;
		var buttonsArr = [];
		var choice;
		// set answer buttons
		$('#question').text(question + "?");
        for (i = 0; i < numAnswers; i++) {
        	choice = questions[currentQuestion].answer[i];
            var button = $('<button>');
            button.text(choice);
            button.attr('data-id', choice);
            $('#answers').append(button);  
     	} 
    } else {
    // reset game once all questions are done
 	$('#answers').html("<input id = 'reset' type='submit' value='Restart Game'>");
 	};
 	timerId = setInterval(timer,1000);
};

// check answers
function setAnswer() {
$("#timer").html("Time remaining: "+ timeRemain + " secs");
	clearInterval(timerId);
	
	// correct answer selected
	if ((buttonClick) == questions[currentQuestion].answer[correctAnswer]) {
	$("#answerStatus").html("<h1>That's right! Great job!</h1>");
	correct++;
	} else {
	clearInterval(timerId);
	$("#answerStatus").html("<h1>Sorry, the correct answer is "+ questions[currentQuestion].answer[correctAnswer] +"</h1>");
	incorrect++;
	}
	newQuestion();	
};

// increnemt current question count, delay before reset page
function newQuestion() {
	currentQuestion++;
	setTimeout(reset,1000*2);
}



