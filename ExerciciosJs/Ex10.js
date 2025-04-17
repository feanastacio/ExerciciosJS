// Peça uma frase e retorne a palavra que mais se repete. Use split(), reduce() e um
// objeto como contador.

var prompt = require('prompt-sync')();
const frase = prompt("Digite uma frase:");

function palavrasqueserepetem (frase) {
    const palavra = frase.split(" ");
    const contador = {};
        for (palavra of palavrasquerepetem) {
            contador[palavra] = (contador [palavrasquerepetem] || 0) + 1;
        }
    return contador;
}

let repetidas = "";
return `A palavra que mais se repete é "${repetidas}"`;
