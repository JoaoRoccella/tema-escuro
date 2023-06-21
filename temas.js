const temaAtual = localStorage.getItem('tema') ? localStorage.getItem('tema') : 'claro';

document.documentElement.setAttribute('data-theme', temaAtual);

document.querySelector('#btnAlterarTema').addEventListener('click', () => {

    const elementoRaiz = document.documentElement;

    if (elementoRaiz.getAttribute('data-theme') === 'claro') {

        elementoRaiz.setAttribute('data-theme', 'escuro');
        localStorage.setItem('tema', 'escuro');

    } else {

        elementoRaiz.setAttribute('data-theme', 'claro');
        localStorage.setItem('tema', 'light');
        
    }

});