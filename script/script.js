var criar = document.getElementById("criar")
var key = localStorage.getItem("key")
var tarefas = document.getElementsByClassName('tarefa')
var comp = document.getElementById("complet")
var compE = document.getElementById("completE")
var forma = document.getElementById("form")
var formaE = document.getElementById("formE")

console.log(key)

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

    var editar = document.createElement("div")
    editar.innerHTML = `<button id="`+ jason.id +`" onclick="editar(this)">edit</button>`

    var deletar = document.createElement("div")
    deletar.innerHTML =  `<button id="`+ jason.id +`"><i class='fa-solid fa-trash-can'></i></button>`
    deletar.className = "deletar"

    deletar.onclick = function(){
        localStorage.removeItem(jason.id)
        novadiv.style.display = "none"
        
    }

    conteudo.appendChild(novadiv);
    novadiv.appendChild(texto);
    novadiv.appendChild(check);
    novadiv.appendChild(deletar);
    novadiv.appendChild(editar);
}

criar.addEventListener("click", function(){
    var pop = document.getElementById("pop")
    var text = document.getElementById("text")

    comp.innerHTML = 'criar'
    pop.style.display = 'block'

})

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

window.onload = function init (){
    key1 = localStorage.getItem("key")
    key1 = parseInt(key1)

    for (let i = 1; i <= key1; i++){
        gerar(i)
    }
}


function editar(btn) {
    let name = document.getElementById('nomeE')
    let fInit = document.getElementById('initE')
    let fFim = document.getElementById('fimE')
    let fTx = document.getElementById('textE')

    let js = localStorage.getItem(btn.id)

    js = JSON.parse(js)
    name.value = js.nome
    fInit.value = js.init
    fFim.value = js.fim
    if (js.descript != ''){
        fTx.innerHTML = js.descript
    }

    var popE = document.getElementById("popE")
    popE.style.display = 'block'
    console.log(btn.id)
}

compE.addEventListener('click', function(event){
    event.preventDefault()
    let form = new FormData(formaE)
    let nome = form.get('nome')
    let init = form.get('init-data')
    let fim = form.get('fim-data')
    let tex = text.value

    if (nome != '' && init != '' && fim != ''){
        let obj = {
            nome: nome,
            init: init,
            fim: fim,
            descript: tex,
            id: key1
        }
        let string = JSON.stringify(obj)
        localStorage.setItem(btn.id, string)
        
        pop.style.display = 'none'
    }
    var conteudo = document.getElementById("novaTarefa")
    popE.style.display = 'none'
    conteudo.innerHTML = ''

    key1 = localStorage.getItem("key")
    key1 = parseInt(key1)

    // for (let i = 1; i <= key1; i++){
    //     gerar(i)
    // }
    })