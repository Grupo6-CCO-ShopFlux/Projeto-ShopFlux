// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    var divCampos = document.getElementById("contCad");
    divCampos.style.display = "none";
    divAguardar.style.display = "block";
    divAguardar.style.display = "flex";
}

function finalizarAguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    var divCampos = document.getElementById("contCad");
    divAguardar.style.display = "none";
    divCampos.style.display = "block";
    divCampos.style.display = "flex";
}

function aguardar2() {
    var divAguardar = document.getElementById("div_aguardar");
    var divCampos = document.getElementById("contlogin");
    divCampos.style.display = "none";
    divAguardar.style.display = "block";
    divAguardar.style.display = "flex";
}

function finalizarAguardar2() {
    var divAguardar = document.getElementById("div_aguardar");
    var divCampos = document.getElementById("contlogin");
    divAguardar.style.display = "none";
    divCampos.style.display = "block";
    divCampos.style.display = "flex";
}

// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

