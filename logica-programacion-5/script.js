var prompt = require("prompt-sync")();

const guessNumber = () => {
	const secretNumber = Math.floor(Math.random() * 100) + 1;
	let numbersTried = [];
	let userGuessed = false;
	while (!userGuessed) {
		let tryNumber = Number(prompt("Adivina el número secreto (entre 1 y 100):"));
		if (isNaN(tryNumber) || tryNumber < 1 || tryNumber > 100) {
			console.log("Error: Debes ingresar un número válido entre 1 y 100.");
			continue;
		}
		if (numbersTried.indexOf(tryNumber) !== -1) {
			console.log("Ya probaste ese número.");
			continue;
		}
        numbersTried.push(tryNumber);
        console.log("Los intentos realizados hasta ahora: ", numbersTried);
        if (tryNumber === secretNumber) {
            console.log(`Felicidades, adivinaste el número secreto: ${secretNumber}`);
            userGuessed = true;
        } else {
            console.log("El número secreto es incorrecto, vuelve a intentarlo.");
        }
	}
};
guessNumber();
