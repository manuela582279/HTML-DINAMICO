//crie alerta na pagina com ação de click em OK
//alert("Alerta com ação de click");

frmExemplo.inNome.focus();
    const vaçidarDados = () => {
        let nome = frmExemplo.inNome.value;
        let idade = frmExemplo.inIdade.value;
    };
       
     if(nome.trim() == ""){
        alert("O campo não pode estar vazio!");
        frmExemplo.inNome.focus();
        return false;
    };
        
if(idade.trim() == "" || idade < 0){
    alert("O campo não pode não pode estar vazio!");
    frmExemplo.inIdade.focus();
    return false;
};

if(nome.trim()=="" && idade.trim()!= "" && idade > 0){
    alert("Formulario enviado!");
    location.reload();
}