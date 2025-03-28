const Atualizardados = () => {
    //criando uma variavel para tbody
    //alert("funcionei")
    let dados = document.getElementById("itens");
    //zerando o tbody se houver dados
    dados.innerHTML = "";
  
    //gerando novos conteudos dinamicamente
    for (let i = 0; i < 5; i++) {
      //criando variavel para valor  aleatorio
      let preco = Math.random() * 100;
  
      // criando variavel para um elemento tr (dados da tabela)
      let elemento = "";
  
      //criando listra de cor diferente para as linhas impares
      if (i % 2 != 0) elemento = "<tr class='listra'>";
      else elemento = "<tr>";
  
      //inserindo os intens na linha (tr)
      elemento += `<td>produto ${i} </td>
          <td>R$ ${preco.toFixed(2)} </td>`;
  
      dados.innerHTML += elemento;
    }
  };
  