const exibir = () => {
    let preguica = document.getElementById('preguica');
    let botão = document.getElementById('botão');
    if (botao.textcontent === 'Exibir') {
        preguica.style.display = 'block';
        botão.textcontent = 'Ocultar';
    }else{
        preguica.style.display = 'none';
        botão.textcontent = 'Exibir';
    }
}