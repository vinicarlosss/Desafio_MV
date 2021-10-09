let addColaborador = () => {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let comida = document.getElementById("comida").value;

    fetch('http://localhost:3000/colaborador-add', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Nome: nome,
            Cpf: cpf,
            Comida: comida
        })
    })
    .then(response => response.json())
    .then(data=> console.log(data))
    .catch(error => console.log(error))
}