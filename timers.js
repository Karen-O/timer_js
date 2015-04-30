// The setInterval() function is commonly used to set a delay for functions that are executed again and again, such as animations.

// setInterval() -->  Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
// clearInterval()  -->  Cancels repeated action which was set up using setInterval().
//
////// var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
// intervalID is a unique interval ID that can be passed to clearInterval().
// func is the function you want to be called repeatedly.
// delay is the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func.
//
////// window.clearInterval(intervalID)
// intervalID is the identifier of the repeated action you want to cancel. This ID is returned from setInterval().



// ####Client Specs
// * When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
// * When "Reset" is clicked, the text should return to "Stop Watch"
// * When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.

var timerTitle = document.getElementById("timer");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var pauseButton = document.getElementById("pause");
var count = 0;

startButton.addEventListener("click", function() {
	var intervalID = setInterval(function StartTimer(){
		timerTitle.innerHTML = "Time elapsed: " + count++;
		// count++;														// when separated onto this line, creates weird pause prior to incrementing
	}, 1000)


resetButton.addEventListener("click", function() {
	clearInterval(intervalID);
	timerTitle.innerHTML = "Stop Watch";
	count = 0;
 })


pauseButton.addEventListener("click", function() {
	clearInterval(intervalID);
})

})
