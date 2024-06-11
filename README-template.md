# Frontend Mentor - Solução do aplicativo de calculadora

Esta é uma solução para o [desafio do aplicativo de calculadora no Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Tabela de conteúdos

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
- [Autora](#autora)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Ver o tamanho dos elementos ajustado com base no tamanho da tela do dispositivo
- Realizar operações matemáticas como adição, subtração, multiplicação e divisão
- Ajustar o tema de cores de acordo com sua preferência

### Captura de tela
![](https://i.imgur.com/7jKbRFL.png)
![](https://i.imgur.com/rox1G5c.png)
![](https://i.imgur.com/kicQksn.png)
![](https://i.imgur.com/RgEsVVk.png)

### Links

- URL da solução: [Solução](https://github.com/Dehrangerz9/calculator-app-main)
- URL do site ao vivo: [Link](https://dehrangerz9.github.io/calculator-app-main/)

## Meu processo

### Construído com

- Marcação HTML5
- CSS
- Javascript

### O que eu aprendi

Como implementar a troca de tema em um site. Isso foi feito em Javascript e criando classes especificas.

O código javascript responsavel foi isso:

```js
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
```
Esse código seleciona o botão de seletor de temas, altera a sua posição e remove a classe de tema atual e adiciona uma nova para todos os elementos do site.


## Autora

- Website - [Meu Portfólio](#)
- Frontend Mentor - [@dehrangerz9](https://www.frontendmentor.io/profile/dehrangerz9)
