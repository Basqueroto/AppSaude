var criar = document.getElementById("criar")
var key = localStorage.getItem("key")

if (key == null){
    console.log('n existe')
    localStorage.setItem('key', 0)
}
else {
    console.log('existe')
}

function gerar (id) {
    console.log('function ativ')
    jason = localStorage.getItem(id)
    jason = JSON.parse(jason)
    var conteudo = document.getElementById("novaTarefa")

    var novadiv = document.createElement ("div")
    novadiv.className = "tarefa"
    novadiv.dataset = jason.id

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


    var texto = document.createElement("p")
    texto.innerHTML = jason.nome

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
}

criar.addEventListener("click", function(){
    var pop = document.getElementById("pop")
    var comp = document.getElementById("complet")
    var forma = document.getElementById("form")
    var text = document.getElementById("text")

    comp.innerHTML = 'criar'
    pop.style.display = 'block'

    comp.addEventListener('click', function(event){
        event.preventDefault()

        let form = new FormData(forma)
        let nome = form.get('nome')
        let init = form.get('init-data')
        let fim = form.get('fim-data')
        let tex = text.value

        if (nome != '' && init != '' && fim != ''){
            key1 = localStorage.getItem("key")
            key1 = parseInt(key1) + 1
            localStorage.setItem('key', key1)

            let obj = {
                nome: nome,
                init: init,
                fim: fim,
                descript: tex,
                id: key1
            }
            console.log(obj)
            let string = JSON.stringify(obj)
            localStorage.setItem(key1, string)
            
            pop.style.display = 'none'
            comp.innerHTML = 'concluir'

            gerar(key1)
        }
        else {
            alert('erro')
        }


    })
})

window.onload = function init (){
    key1 = localStorage.getItem("key")
    key1 = parseInt(key1)

    for (let i = 1; i <= key1; i++){
        gerar(i)
    }
}