var Lform = document.getElementById('formL')

Lform.addEventListener('submit', (event) => {
    event.preventDefault()
    var f = new FormData(Lform)
    var email = f.get('email')
    var password = f.get('password')

    const dataL = {
        email: email, 
        password: password
    }

    fetch('http://127.0.0.1:5000/log', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json' // Especifique o tipo de conteúdo como JSON
        },
        body: JSON.stringify(dataL) // Converta o objeto em uma string JSON
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