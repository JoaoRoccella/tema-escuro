const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

document.querySelector('#btnAlterarTema').addEventListener('click', () => {

    const elementoRaiz = document.documentElement;

    if (elementoRaiz.getAttribute('data-theme') === 'light') {
        elementoRaiz.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        elementoRaiz.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }

});