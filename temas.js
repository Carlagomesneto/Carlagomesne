// DOM- document Objetct Model - Modelo de Objeto do Documento
// Transforma tudo na página em objeto. Cada objeto receber artibuto (propriedades) e métodos (funções) associadas a ele. 

// FUNÇÕES
// function nomeDaFuncao(parâmetros) {corpo da função (o que ela vai fazer com os  parâmetros e o que ela vai retornar para quem a chamou);
//}

//Sabre o tema atual e obter o elemento do tem atual


// Saber onde está o atributo de tema atual


// Se o botão for clicado, então...
// addEventListener(evento, função)
document.querySelector('#buttonTrocaTema').addEventListener('click',
() => {
    // pegar o elemento com o tema
    // se o tema for light, então mude o atributo para dark
    // se não for
    if(document.documentElement.getAttribute('data-tema') === 
    'light') {

        document.documentElement.setAttribute('data-tema','dark');

    } else {
        document.documentElement.setAttribute('data-tema','light')
    }

});


// Troca o tema:
// 1. Pegar o elemento com tema 
// 2. Apagar o atributo do tema atual
// 3. Escrever o atributo do novo tema
