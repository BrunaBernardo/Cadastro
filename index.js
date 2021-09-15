console.log ("Sistema de cadastro de peças.")
let pesoPeca = 200

if (pesoPeca >= 100){
    console.log("Cadastro por peso concluido com sucesso.")
}else{
    console.log("O peso da peça é menor que 100, ela não foi cadastrada.")
    }

// _______-

var pecas = ["Mola", "Parafuso", "Pá", "Martelo", "Prego", "Rolamento"]

for (let i = 0; i < pecas.length; i++){
    console.log(" peça "  + [i] +  "  é  " + pecas[i])
    
    var textoVetor = pecas[i]

    if (textoVetor.length <3){
        console.log(pecas[i] + ": Nome invalido, cada peça precisa ter no minimo 3 caracteres.")
    }else{
        console.log(pecas[i] + ": Peça cadastrada com sucesso.")
    }
}

//_______-
  
var quantidadePecas = 4
;

if (quantidadePecas <10){
    console.log("O cadastro foi realizado.")
}else{
    console.log("A quantidade máxima de peças por caixa são 10, a quantidade foi ultrapassada.")
}