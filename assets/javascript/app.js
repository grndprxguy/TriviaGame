// set variables
var correct= 0;
var incorrect= 0;
var skipped= 0;
var currentQuestion = 0;
var timeCount = 15;
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
$(document).ready(function () {
	showQuestion();
})

function showQuestion() {
	var question = questions[currentQuestion].question;
	var numAnswers = questions[currentQuestion].answer.length;
	var choice;
	// display countdown timer
	$("#timer").html("Time remaining: " + "00:" + timeCount + " secs");
	// Set the questionClass text to the current question
	$('#question').text(question + "?");

	// Remove all current <li> elements (if any)
	$('#answers').find("li").remove();

	for (i = 0; i < numAnswers; i++) {
		choice = questions[currentQuestion].answer[i];
		$('<li>' + choice + '</li>').appendTo('#answers');
		console.log(choice);
	}
};

// $("#answers").on("click", "div", function(){
// 	clearInterval(timeCount);
// 	console.log($(this).text());
// 	var highlight = $(this).css("background-color", "yellow");

// });

 // var timer = function() {
 //        timeCount--;
 //        if (timeCount <= 0) {
 //            setTimeout(function() {
 //                currentQuestion++;
 //            });

 //        } else {
 //            $("#timer").html("Time remaining: " + "00:" + _t.count + " secs");
 //        }
 //    };
