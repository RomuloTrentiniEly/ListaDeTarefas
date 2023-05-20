

function adicionar(){
var input = document.getElementById("digitado");
var inputs = input.value.trim();

    if(inputs !== ""){
        var lista = document.getElementById("lista")
        var novoItem =document.createElement("li")

        novoItem.innerHTML = inputs

    var excluir = document.createElement("button");
    excluir.innerHTML = "Excluir" 
    excluir.addEventListener("click", function(){
        lista.removeChild(novoItem);
    });
    novoItem.appendChild(excluir)
    lista.appendChild(novoItem)  
    
    input.value = ""
    }
}

