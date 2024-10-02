if (localStorage.getItem('token') == null) {alert("Você precisa estar logado para acessar essa página."); 
    Window.location.href = "./assets/html/singin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = 'Olá ${userLogado.nome}';

function sair() {
    localStorage.removeItem("Token");
    localStorage.removeItem("userLogado");
    window.location.href ="./assets/html/singin.html";
}