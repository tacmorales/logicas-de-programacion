// Función para determinar si es un número
const esNumero = (num) => (typeof num === "number" && num - num === 0) || (typeof num === "string" && Number.isFinite(+num) && num.trim() !== "");

const form = document.getElementById("fibonacciForm");
const resultadoDiv = document.getElementById("resultado");

function generarFibonacci(n) {
	let fibonacci = [0, 1];
	for (let i = 2; i < n; i++) {
		fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
	}
	return fibonacci.slice(0, n);
}

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const input = document.getElementById("numero").value;
	const numero = input;

	if (!esNumero(numero)) {
		resultadoDiv.innerHTML = `<p class="error">Debes ingresar un número válido.</p>`;
	} else if (Number(numero) < 1) {
		resultadoDiv.innerHTML = `<p class="error">El número debe ser mayor que 0.</p>`;
	} else {
		// Generar la serie de Fibonacci
		const serie = generarFibonacci(Number(numero));

		// Mostrar el resultado en el DOM
		resultadoDiv.innerHTML = `<h4>Primeros ${numero} términos de fibonacci: </h4> <p>${serie.join(", ")}</p>`;
	}
});
