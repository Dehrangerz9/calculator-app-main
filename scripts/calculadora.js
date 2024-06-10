const botoes = document.querySelectorAll(".calculadora-menu-botao");
const displayCalculadora = document.querySelector("#calculadora-display");

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        buttonPressHandler(botao);
    });
});

document.addEventListener('keypress', keypressHandler);

let resultadoAnterior = ''
let valorNoDisplay = '';

function keypressHandler(tecla) {
    if (!isNaN(parseInt(tecla.key))) {
        valorNoDisplay += tecla.key;
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (tecla.key === '+') {
        valorNoDisplay += '+';
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (tecla.key === '-') {
        valorNoDisplay += '-';
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (tecla.key === '*') {
        valorNoDisplay += '*';
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (tecla.key === '/') {
        valorNoDisplay += '/';
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (tecla.key === '.') {
        valorNoDisplay += '.';
        displayCalculadora.innerHTML = valorNoDisplay;
    } else if (tecla.key === 'Enter') {
        realizarOperacao(valorNoDisplay);
    } else if (tecla.key === '=') {
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
    } else if (botao.getAttribute('id') === 'botao-subtracao') {
        valorNoDisplay += '-';
        displayCalculadora.innerHTML = valorNoDisplay; 
    } else if (botao.getAttribute('id') === 'botao-multiplicar') {
        valorNoDisplay += '*';
        displayCalculadora.innerHTML = valorNoDisplay; 
    } else if (botao.getAttribute('id') === 'botao-dividir') {
        valorNoDisplay += '/';
        displayCalculadora.innerHTML = valorNoDisplay; 
    } else if (botao.getAttribute('id') === 'botao-ponto') {
        valorNoDisplay += '.';
        displayCalculadora.innerHTML = valorNoDisplay; 
    } else if (botao.getAttribute('id') === 'botao-igual') {
        realizarOperacao(valorNoDisplay);
    } else if (botao.getAttribute('id') === 'botao-reset') {
        reset();
    }
}

function realizarOperacao(operacao) {
    try {
        let operacaoTotal = resultadoAnterior + operacao
        let resultado = math.evaluate(operacaoTotal)
        displayCalculadora.innerHTML = resultado;
        valorNoDisplay = ''
        resultadoAnterior = resultado
    } catch (error) {
        console.log(error)
        displayCalculadora.innerHTML = "Erro";
    }
}

function reset(){
    valorNoDisplay = ''
    resultadoAnterior = ''
    displayCalculadora.innerHTML = valorNoDisplay
}

function limparDisplay() {
    valorNoDisplay = '';
    displayCalculadora.innerHTML = valorNoDisplay;
}