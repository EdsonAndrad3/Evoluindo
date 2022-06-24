// captura do slider e botão
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
// captura dos elementos para mostrar caracteres na tela
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
// para exibir a senha gerada e elemento de tooltip
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));        
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword(){
    navigator.clipboard
    .writeText(novaSenha)
    .then(() => {
      alert("Senha Copiada com Sucesso!");
    })
    .catch(() => {
      alert("Ops! Algo deu Errado.");
    });  
}
