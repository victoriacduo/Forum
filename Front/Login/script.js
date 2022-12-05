const inpUser = document.getElementById('username');
const inpPass = document.getElementById('password');
const btnLogin = document.getElementById('button');

const logar = () => {
    let usuario = {
        "email": inpUser.value,
        "senha": inpPass.value
    }

    fetch('http://localhost:3000/reenyedito/login/usuario', {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }).then(response => { return response.json() })
    .then(info => {
        if (info[0] != undefined) {
            window.localStorage.setItem('usuario', inpUser);
            window.location.href = '../Home/index.html';
        } else {
            alert('Erro no Login, username ou senha incorreta!');
            window.location.reload();
        }
    })
}