let campoNome = document.querySelector('#nome');
let campoCpf = document.querySelector('#cpf');
let campoComida = document.querySelector('#comida');
let Msg = document.querySelector('#Msg');

let validaForm = () =>{
    limpaValidacao();
    validaCampo(campoNome, "nome");
    validaCampo(campoCpf, "Cpf");
    validaCampo(campoComida, "Opção");
    if(campoNome.value != "" && campoCpf.value != "" && campoComida.value != ""){
        Msg.classList.remove("alert-danger");
        Msg.classList.add("alert-sucess");
        Msg.innerHTML = "Enviado com Sucesso";
        Msg.style.display = "block";
        campoNome.value = "";
        campoCpf.value = "";
        campoComida.value = "";
    };


};

let validaCampo = (campo, nomeDoCampo) => {
    if(campo.value == ""){
        Msg.classList.add("alert-danger")
        Msg.innerHTML += "Preencha o(a)"+" " + nomeDoCampo + "</br>";
        Msg.style.display = "block";
        campo.style.border = "2px solid red";
    }
};

let limpaValidacao = () => {
    campoNome.style.border = "";
    campoCpf.style.border = "";
    campoComida.style.border = "";
    Msg.innerHTML = "";
    Msg.style.display = "none";
};
