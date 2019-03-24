/* Scroll textbox to bottom */
window.setInterval(function() {
	var elem = document.getElementById("response");
	elem.scrollTop = elem.scrollHeight;
}, 500);

/*Enter button to Submit*/
document.addEventListener("keyup", function(e) {
	if (e.keyCode == 13) {
		reply();
	}
});

function reply() {
	var input = document.getElementById("userInput").value;
	var chatbox = document.getElementById("response");
	var userInput = input.toUpperCase();

	/* Display user message */
	chatbox.innerHTML += "<br/> <span style='color: blue;'>User:</span> " + input;

	/* Check for keywords */
	var vocab = ["HELLO", "NAME", "BANANA", "HOW ARE YOU", "HI", "HELP"];

	/* Responses to keywords */
	var ans = [
		"Nice to meet you!",
		"My name is Group A bot",
		"I like bananas.",
		"I'm good, thanks for asking!",
		"Hihihi!",
		"Hi, The bamboo industry in India generate 516.33 million man days of work in India every year. We are happy to serve these people with our small handy tool. ",
	];

	/* Megbot Re: format */
	i = 0;
	while (i < vocab.length) {
		var mb = "<br/><span style='color: red;'>IIPGroupAbot:</span> ";
		var n = userInput.includes(vocab[i]);

		if (n === true) {
			chatbox.innerHTML += mb + ans[i];
			break;
		}

		i++;

		if (n === false && i === vocab.length) {
			chatbox.innerHTML += mb + "Sorry, please clarify!";
		}
	}
	document.getElementById("userInput").value = '';
}