// set variables
var correct= 0;
var incorrect= 0;
var skipped= 0;
var currentQuestion = 0;
var firstTime = true;
var timeRemain = 5;
var correctAnswer;
var timerId;
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
	correct: 1,
}, {
	question: "How many times did Spaniard Seve Ballesteros win The Open”",
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

// reset display
var reset = function() {
	$('#question').html("");
	$('#answers').html("");
	$('#image').html("");
	timeRemain = 15;
	// showQuestion();
};

// countdown timer
function timer() {
	timeRemain--;
	$("#timer").html("Time remaining: "+ timeRemain + " secs");
	//if time runs out
	if (timeRemain == 0) {
		clearInterval(timerId);
		$('#question').html("<h1>Sorry, Time's up!</h1>");
		$('#answers').html("<h1>The correct answer is "+ questions[currentQuestion].answer[correctAnswer] +"</h1>");
		skipped++;
		console.log("skipped "+ skipped);
	}
}

function showQuestion() {
	var question = questions[currentQuestion].question;
	var numAnswers = questions[currentQuestion].answer.length;
	correctAnswer = questions[currentQuestion].correct;
	var buttonsArr = [];
	var choice;
	if (questions[currentQuestion]){
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
 	$('#answers').append(button);
 	button.text("Restart");
 	};
 	timerId = setInterval(timer,1000);
};


     
$(document).ready(function() {
$('#start').on('click',function () {
	$(this).hide();
	showQuestion();
	setAnswer();
})
});
// answer button functionality
function setAnswer() {
$("#timer").html("Time remaining: "+ timeRemain + " secs");
$("#answers").on("click", "button", function nextQuestion(){
	clearInterval(timerId);
	var highlight = $(this).css("background-color", "yellow");
	// correct answer selected
	if ($(this).text() == questions[currentQuestion].answer[correctAnswer]) {
	$("#answerStatus").html("That's right! Great job!");
	correct++;
	console.log("correct " + correct);
	} else {
	$("#answerStatus").html("<h1>Sorry, the correct answer is "+ questions[currentQuestion].answer[correctAnswer] +"</h1>");
	incorrect++;
	console.log("incorrect" + incorrect);
	}	
	})
};

function nextQuestion() {
	currentQuestion++;
	console.log(currentQuestion)
}



