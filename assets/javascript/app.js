// set variables
var firstRun = true;
var correct= 0;
var incorrect= 0;
var skipped= 0;
var currentQuestion = 0;
var timeRemain = 10;
var correctAnswer;
var timerId;
var buttonClick;
var queryURL = "https://api.giphy.com//v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
// questions and answers
var questions  = [{
	question: "Which US state is named on the label of a Jack Daniels bottle",
	answer: ["New York", "California", "Tennessee", "North Carolina"],
	correct: 2,
	image: "tennessee",
},{
	question: "How many feet are there in a fathom",
	answer: ["Six", "Four", "Eight", "Twelve"],
	correct: 0,
	image: "fathom",
}, {
	question: "What type of animal was inside Sputnik 2 when launched into orbit in 1957",
	answer: ["Chimp", "Dog", "Cat", "Mouse"],
	correct: 1,
	image: "dog",
}, {
	question: "A couple celebrating their crystal wedding anniversary have been married for how many years",
	answer: ["Fifteen", "Five", "Twenty Five", "Thirty"],
	correct: 0,
	image: "crystal",
}, {
	question: "Kodiak Island is in which US state",
	answer: ["Oregon", "Hawaii", "Alaska", "Maine"],
	correct: 2,
	image: "kodiak island",
}, {
	question: "In the human body what is the hallux",
	answer: ["Forearm", "Big Toe", "Pinky Toe", "Elbow"],
	correct: 1,
	image: "toe",
}, {
	question: "Which of these is a real variety of Yam",
	answer: ["Sandra", "Amy", "Jessica", "Lucy"],
	correct: 3,
	image: "yam",
}, {
	question: "The Cassini-Huygens probe was sent to visit which planet",
	answer: ["Jupiter", "Uranus", "Neptune", "Saturn"],
	correct: 3,
	image: "saturn",
}, {
	question: "The Mariana Trench is the deepest point on which planet",
	answer: ["Mars", "Earth", "Venus", "Mercury"],
	correct: 1,
	image: "marianas trench",
}, {
	question: "Richard Branson founded which major airline",
	answer: ["Quantas", "Southwest Airlines", "Virgin", "Emirates"],
	correct: 2,
	image: "richard branson",
}, {
	question: "Which Jessie had a 2011 hit with “Price Tag”",
	answer: ["Jessie J", "Jessie G", "Jessie C", "Jessie D"],
	correct: 0,
	image: "jessie j"
}, {
	question: "How many times did Spaniard Seve Ballesteros win The Open",
	answer: ["4", "1", "3", "2"],
	correct: 2,
	image: "steve ballesteros",
}, {
	question: "“You know I can’t drink anymore” were the last words of which artist",
	answer: ["Da Vinci", "Botticelli", "Matisse", "Picasso"],
	correct: 3,
	image: "picasso",
}, {
	question: "“If music be the food of love then play on” comes from which Shakespeare play",
	answer: ["Coriolanus", "All’s Well That Ends Well", "Twelfth Night", "Timon of Athens"],
	correct: 2,
	image: "shakespear",
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
	if (currentQuestion < 14) {
	setAnswer();}
	else {
		resetScore();
	};
});

// reset display
var reset = function() {
	clearInterval(timerId);
	$('#question').html("");
	$('#answers').html("");
	$('#image').html("");
	timeRemain = 10;
	showQuestion();
};

var resetScore = function() {
	correct = 0;
	incorrect = 0;
	skipped = 0;
	currentQuestion	= 0;
	setTimeout(reset,1000*2);
};

function giphy() {
	var element = (Math.floor(Math.random() * 10) + 1)  
	   $.ajax({
      url: queryURL + questions[currentQuestion].image,
      method: 'GET'
    }).done(function(response) {
    	result =  (response.url);
      $("#image").html("<img src="+response.data[element].images.fixed_height_still.url+">");
    });
}

// countdown timer
function timer() {	
	$("#timer").html("Time remaining: "+ timeRemain + " Seconds");
	//if time runs out
	if (timeRemain == 0) {
		clearInterval(timerId);
		$('#question').html("<h2>Sorry, Time's up!</h2>");
		$('#answers').html("<h2>The correct answer is "+ questions[currentQuestion].answer[correctAnswer] +"</h2>");
		giphy();
		skipped++;
		newQuestion();
	}
	timeRemain--;	
}

// pull questions and answers from object groups
function showQuestion() {
	timerId = setInterval(timer,1000);
	$('#correct').text("Correct Answers: " + correct);
	$('#inCorrect').text("Inorrect Answers: " + incorrect);
	$('#skipped').text("Skipped Questions: " + skipped);
	$("#timer").html("Time remaining: "+ timeRemain + " Seconds");
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
    $("#timer").html("");
    clearInterval(timerId);
 	$('#answers').html("<Button data-id='reset'>Restart Game</button>");
 	};
 	
};

// check answers
function setAnswer() {
	// correct answer selected
	clearInterval(timerId);
	if ((buttonClick) == questions[currentQuestion].answer[correctAnswer]) {
	$("#answers").html("<h2>That's right! Great job!</h2>");
	correct++;
	} else if ((buttonClick == reset)) {
		resetScore();
	} else {
	// incorrect answer selected
	clearInterval(timerId);
	$("#answers").html("<h2>Sorry, the correct answer is "+ questions[currentQuestion].answer[correctAnswer] +"</h2>");
	incorrect++;
	}
	giphy();
	newQuestion();	
};

// increnemt current question count, delay before reset page
function newQuestion() {
	currentQuestion++;
	setTimeout(reset,1000*2);
}



