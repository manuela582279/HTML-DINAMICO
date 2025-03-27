//criando a função de flecha com frases aleatorias
const falar = () => {
    //criando o veotr de frases
    const frases = [
        "Hoje esta um dia bonito!",
        "Falta muito pra sexta-feira?",
        "Qual o cardapio de hoje no almolço?",
        "Vish, tem prova de matematica!!!",
    ];
    //criando uma variavel para armazenar a DIV com id "tagarela"
    let tagarela = document.getElementById("tagarela");
    //criando variavel de controle para a frase exibida 
    let indice = 0
    //criando uma variavel para numero aleatorio entre 0 e 1 (lembrando que o 1 não entra na conta)
    let numero = Math.random()
    //configurando o numero para a frase selecionada
    if(numero> 0.75) indice=3;
    else if(numero> 0.5) indice=2;
    else if(numero> 0.25) indice=1;
    //escrvendo a frase para o usuario
    tagarela.innerHTML = frases[indice];
}