function* guessingGame() {
	yield game.say('Hey there!');
	var guess = false;
	var done = false;
	
	while(!done) {
		while(!guess) {
			var num = (Math.floor(Math.random()*(100-1))+1);
			var numGuessed = yield game.ask("Guess a number between 1 and 100!");
			// numGuessed = parseInt(numGuessed);
			if (numGuessed === num) {
				var decide = yield game.choose("Good guess! Would you like to play again?", "Yes", "No");
					if (decide === "Yes") {
						guessGame();
					} else {
						guess = true;
						done = true;
						game.end("Ok, bye!");
					}
			} else if (numGuessed>num) {
				yield game.say("You guessed too high! Try again.");
			} else {
				yield game.say("You guessed too low! Try again.");
			}
		}
	}
	guessGame();

}