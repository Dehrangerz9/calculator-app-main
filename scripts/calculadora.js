import { mad } from "../../mathjs";
const botoes = document.querySelectorAll(".calculadora-menu-botao");
const displayCalculadora = document.querySelector("#calculadora-display");

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        buttonPressHandler(botao);
    });
});

document.addEventListener('keypress', keypressHandler);

let valorNoDisplay = '';
let valorAnterior = '';

function keypressHandler(tecla) {
    if (!isNaN(parseInt(tecla.key))) {
        valorNoDisplay += tecla.key;
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (tecla.key === '+') {
        valorNoDisplay += '+';
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (tecla.key === 'Enter') {
        realizarOperacao(valorNoDisplay);
    }
    console.log(tecla.key);
}

function buttonPressHandler(botao) {
    if (!isNaN(parseInt(botao.innerHTML))) {
        valorNoDisplay += botao.innerHTML;
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (botao.getAttribute('id') === 'botao-delete') {
        limparDisplay();
    } else if (botao.getAttribute('id') === 'botao-somar') {
        valorNoDisplay += '+';
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (botao.getAttribute('id') === 'botao-igual') {
        realizarOperacao(valorNoDisplay);
    }
}

function realizarOperacao(operacao) {
    try {
        let resultado = evaluate(operacao);
        displayCalculadora.innerHTML = resultado;
    } catch (error) {
        displayCalculadora.innerHTML = "Erro";
    }
}

function limparDisplay() {
    valorNoDisplay = '';
    displayCalculadora.innerHTML = valorNoDisplay;
}