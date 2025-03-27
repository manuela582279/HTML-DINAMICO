
const ligar = () => {
  let lampada = document.getElementById("lampada");
  
  //   lampada.src = "img/acesa.jpg";
  
  if (lampada.src.includes("apagada.jpg"))
      lampada.src = "img/acesa.jpg"
  else lampada.src = "img/apagada.jpg"

}

const validaForm = () => {
    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;
  
    let mensagem = document.getElementById("mensagem-erro");
    mensagem.style.display = "nome";
    let erro = "";
  
    if (nome.length < 5) {
      erro += "O campo Nome deve conter ao menos 5 caracteres!\n";
    }
  
    if (data == "") {
      erro += "O campo Data não pode ser vazio!\n";
    }
    
    if (telefone == "") {
         erro += "O campo telefone não pode estar vazio!\n"
    }
  
    if (email.length < 5) {
     erro += "O campo email deve conter ao menos 5 caracteres!\n";
   }
  
   if (produto.length < 5) {
     erro += "O campo produto deve conter ao menos 5 caracteres!\n";
   }
  
   if (quantidade <= 0 || valor <= 0) {
     erro += "O campo quantidade não pode ser vazio!\n";
   }
  
   if (valor <= 0 || valor <= 0) {
     erro += "O campo valor unitário não pode ser vazio!\n";
   }
   
    if (erro != "") {
      mensagem.innerText = erro;
      mensagem.style.display = "block";
    }
  };

     /*const validaForm = () => {
      let erro = document.getElementById("mensagem-erro");
      erro.innerHTML = "";
      
      let nome = inCli;
      let data = inData;
      let fone = inFone;
      let mail = inMail;
      let prod = inProd;
      let qtd = inQtd;
      let val = inVal;
    
    
      switch (true) {
        case nome.value.trim() == "" ||
          data.value == "" ||
          fone.value == "" ||
          mail.value == "" ||
          prod.value == "" ||
          qtd.value == "" ||
          val.value == "":
          erro.style.display = "block";
          erro.innerHTML = "Erro: O campo não pode estar vazio!";
          break;
    
    
        case val.value < 0 || qtd.value < 0:
          erro.style.display = "block";
          erro.innerHTML = "Erro: Este campo não pode ser negativo!";
    
    
          break;
    
    
        case nome.value.trim().length < 5 || prod.value.trim().length < 5:
          erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
          erro.style.display = "block";
          break;
    
    
        default:
          break;
      }
    };*/



    //atividade 2--------------------------------------------
    const gerarImagem = () =>{
      let qtdImagem = document.getElementById("inQtdImg").value;
      let canvas = document.getElementById("canvas");
      canvas.innerHTML = "";
      if (qtdImagem <= 0)
          alert("o campo quantidade não pode estar  nulo ou negativo!");
  else{
      for(let index = 1; index <= qtdImagem; index++){
          canvas.innerHTML += "<img src= 'img/logo.png' alt=''>";
      }
  }
  }

  //atividade 4 --------------------------------------------
  
  const calcular = () => {
    let valPedido = inValorPedido.value;
    let perDesconto = inPercDesc;
    let valDesconto = inValDesc; 
    let valFinalPedido = inValFinal;
  
    if (valPedido >= 2000) {
      //aplicar desconto de 1.5%
      perDesconto.value = 1.5;
      let desc = valPedido * 0.015;
      valDesconto.value = desc;
      valFinalPedido.value = valPedido - desc;
    } else if (valPedido >= 1500) {
      //aplicar desconto de 1.0%
      perDesconto.value = 1.0;
      let desc = valPedido * 0.01;
      valDesconto.value = desc;
      valFinalPedido.value = valPedido - desc;
    } else if (valPedido >= 1000) {
      //aplicar desconto de 0.8%
      perDesconto.value = 0.8;
      let desc = valPedido * 0.008;
      valDesconto.value = desc;
      valFinalPedido.value = valPedido - desc;
    } else if (valPedido >= 500) {
      //aplicar desconto de 0.5%
      perDesconto.value = 0.5;
      let desc = valPedido * 0.005;
      valDesconto.value = desc;
      valFinalPedido.value = valPedido - desc;
    } else {
    }
  };
  
  