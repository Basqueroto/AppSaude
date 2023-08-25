var form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    var f = new FormData(form)
    var nome = f.get('nome')
    var email = f.get('email')
    var password = f.get('password')

    const data = {
        nome: nome,
        email: email,
        password: password
    }

    console.log(JSON.stringify(data))

    fetch('http://127.0.0.1:5000/api', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
        },
        body: JSON.stringify(data) // Converta o objeto em uma string JSON
    })
    .then((resp) => resp.json())
    .then(function(data) {
        let acert = data.message // saberemos se deu certo
        console.log(acert)
        if (acert){
            window.location="lista.html"
        }
    })
    .catch(function(error) {
        console.log(error);
      });
    
})