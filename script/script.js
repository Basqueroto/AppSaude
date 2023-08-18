var criar = document.getElementById("criar")
var key = localStorage.getItem("key")
// if (key != typeof('string')) {
//     localStorage.removeItem('key')
//     localStorage.setItem('key', '{key: 1}')
//     console.log(key)
// }

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
            let obj = {
                nome: nome,
                init: init,
                fim: fim,
                descript: tex
            }
            console.log(obj)
            let string = JSON.stringify(obj)
            localStorage.setItem(nome, string)

            key1 = localStorage.getItem("key")
            console.log(key1)
            mud = parseInt(key1[6]) + 1
            key[6] = mud.toString()
            
            console.log(key1)

            localStorage.setItem('key', key1)
            
            

            

        }
        else {
            alert('erro')
        }


    })


    // var conteudo = document.getElementById("novaTarefa")

    // var novadiv = document.createElement ("div")
    // novadiv.className = "tarefa"

    // var check = document.createElement("input")
    // check.type = "checkbox"
    // check.className = "checkbox"

    // check.addEventListener("click", function(){
    //     var cheque = document.getElementsByClassName ("checada")

    //     if (check.className === "checada"){
    //         texto.style.textDecoration = "none"
    //         texto.style.color = "black"
    //         check.className = ""  
    //     } else {
    //         texto.style.textDecoration = "line-through"
    //         check.className = "checada" 
    //         texto.style.color = "green" 
    //     }
        
    // })


    // var texto = document.createElement("input")
    // texto.type = "text"
    // texto.className ="input"

    // var deletar = document.createElement("button")
    // deletar.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
    // deletar.className = "deletar"
    // deletar.onclick = function(){
    //     novadiv.style.display = "none"
    // }

    // conteudo.appendChild(novadiv);
    // novadiv.appendChild(texto);
    // novadiv.appendChild(check);
    // novadiv.appendChild(deletar);
})
