const botaoControleTema = document.getElementById('botao-controle-tema');
let temaAtual = 1;
function alterarTema(){
    const elementosComClasseTema = document.querySelectorAll(`.tema${temaAtual}`)
    let novoTema = temaAtual + 1;
    if (novoTema > 3) {
        novoTema = 1;
    }
    elementosComClasseTema.forEach((elemento) => {
        elemento.classList.replace(`tema${temaAtual}`,`tema${novoTema}`)
     })
    temaAtual = novoTema;
    this.style.gridColumnStart = `${temaAtual}`;
    this.style.gridColumnEnd = `${temaAtual + 1 }`;

}

botaoControleTema.addEventListener('click', alterarTema);
