window.alert("Let's play a game.");

var user = parseInt(window.prompt("Guess a number between 0 and 100."));

var number = Math.round(Math.random() * (100 - 0) + 0);	

var win = false;
	
function integer(number) {
	return Math.round(number)
}

console.log(number)
console.log(user)

if ((user >=0 || user <=100) == false) {
	user = window.prompt("You must enter a number..");
} else if (user === null) {
	throw alert('Thanks for playing');
	}

while (win !== true) {
	play(user);
}

function play(user) {
	if (user == null) {
		throw alert('Thanks for playing');
	}

	if ((user >=0 || user <=100) == true && user > number) {
		user = window.prompt("Sorry, it's LOWER than that.");
	} else {
		win = true;
	}

	if ((user >=0 || user <=100) == true && user < number) {
		user = window.prompt("Sorry, it's HIGHER than that.");
	} else {
		win = true;
	}
	
	if (user == number) {
		var choice = parseInt(window.prompt("You found the number, well played!! \n Play Again??"));
		if (choice !== null) {
			user = choice
		} else {
			win = true;			
		}
	}
}

throw alert('Thanks for playing');

// function playOn (choice) {
// 	while (user === number) {
// 		var choice = confirm("You found the number, well played!! \n Play Again??");
// 		if (choice === null) {
// 			throw alert('Thanks for playing');
// 		} else {
// 			user === choice
// 		}
// 	}
// };

// playOn(user)


