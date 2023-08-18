var criar = document.getElementById("criar")

criar.addEventListener("click", function(){
    var conteudo = document.getElementById("novaTarefa")

    var novadiv = document.createElement ("div")
    novadiv.className = "tarefa"

    var check = document.createElement("input")
    check.type = "checkbox"
    check.className = "checkbox"
    check.addEventListener("click", function(){
        var cheque = document.getElementsByClassName ("checada")

        if (check.className === "checada"){
            texto.style.textDecoration = "none"
            texto.style.color = "black"
            check.className = ""  
        } else {
            texto.style.textDecoration = "line-through"
            check.className = "checada" 
            texto.style.color = "green" 
        }
        
    })


    var texto = document.createElement("input")
    texto.type = "text"
    texto.className ="input"

    var deletar = document.createElement("button")
    deletar.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
    deletar.className = "deletar"
    deletar.onclick = function(){
        novadiv.style.display = "none"
    }

    conteudo.appendChild(novadiv);
    novadiv.appendChild(texto);
    novadiv.appendChild(check);
    novadiv.appendChild(deletar);
})
