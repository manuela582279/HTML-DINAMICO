const trocarImagem = () => {
  let imagem = document.getElementById("imagem");

  const trocarImagens = [
    "img/fotogatinho.png",
    "img/paisagensmar.png",
    "img/paisagemlago.png",
    "img/fotosmar.png",
  ];
  //criando uma variavel de controle para imagem
  let indice = 0;
  //criando uma variavel para numero aleatorio entre 0 e 1 (lembrando que o 1 não entra na conta)
  let numero = Math.random();
  //configurando o numero para a imagem selecionada
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;
  else indice = 0;
  imagem.src = trocarImagens[indice];
};

const somar = () => {
  let valor1 = frmCalculadora.inValor1.value;
  let valor2 = frmCalculadora.inValor2.value;
  let resultado = parseFloat(valor1) + parseFloat(valor2);
  frmCalculadora.inResultado.value = resultado;
};

const subtrair = () => {
    let valor1 = frmCalculadora.inValor1.value;
    let valor2 = frmCalculadora.inValor2.value;
    let resultado = parseFloat(valor1) - parseFloat(valor2);
    frmCalculadora.inResultado.value = resultado;
  };
  
  const multiplicar = () => {
    let valor1 = frmCalculadora.inValor1.value;
    let valor2 = frmCalculadora.inValor2.value;
    let resultado = parseFloat(valor1) * parseFloat(valor2);
    frmCalculadora.inResultado.value = resultado;
  };
  
  const dividir = () => {
    let valor1 = frmCalculadora.inValor1.value;
    let valor2 = frmCalculadora.inValor2.value;
    let resultado = parseFloat(valor1) / parseFloat(valor2);
    frmCalculadora.inResultado.value = resultado;
  };
  

  /*const somar = (operador) => {
  let valor1 = frmCalculadora.inValor1.value;
  let valor2 = frmCalculadora.inValor2.value;
    switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;


    case "-":
      resultado = valor1 - valor2;
      break;


    case "*":
      resultado = valor1 * valor2;
      break;


    case "/":
      resultado = valor1 / valor2;
      break;
  }*/
