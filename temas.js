// Verifica e obtém o tema atual de uma leitura do local storage
const temaAtual = localStorage.getItem('tema') ? localStorage.getItem('tema') : 'claro';

// Define o data-theme da página com o valor lido do local storage
document.documentElement.setAttribute('data-theme', temaAtual);

// Adiciona uma escuta de evento de click no botão e define uma
// nova função sem nome, que será executada no callback
document.querySelector('#btnAlterarTema').addEventListener('click', () => {

    // Armazena o elemento raiz (html)
    const elementoRaiz = document.documentElement;

    // Ae o elemento raiz tem o atributo data-theme igual a 'claro'...
    if (elementoRaiz.getAttribute('data-theme') === 'claro') {

        // ...muda o atributo para escuro e...
        elementoRaiz.setAttribute('data-theme', 'escuro');

        // ...grava no armazenamento local essa informação.
        localStorage.setItem('tema', 'escuro');
    // Se não...
    } else {

        // ...muda o atributo para claro e...
        elementoRaiz.setAttribute('data-theme', 'claro');

        // ...grava no armazenamento local essa informação.
        localStorage.setItem('tema', 'claro');
        
    }

});