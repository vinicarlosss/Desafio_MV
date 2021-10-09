let addColaborador = () => {

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    fetch('http://localhost:3000/colaborador-add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nome: nome,
                Cpf: cpf
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    addComida();
}

let addComida = () =>{
    let cpf = document.getElementById("cpf").value;
    let comida = document.getElementById("comida").value;
    fetch('http://localhost:3000/comida-add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Cpf: cpf,
                Comida: comida
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    alert("Adicionado com sucesso, nos vemos amanhã!!");
}

let attComida = () => {

    let cpf = document.getElementById("cpf").value;
    let comida = document.getElementById("comida").value;
    fetch('http://localhost:3000/comida-att', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Cpf: cpf,
                Comida: comida
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    alert("Alterado com sucesso, nos vemos amanhã!!");
}

let deleteComida = () => {
    let cpf = document.getElementById("cpf").value;
    fetch('http://localhost:3000/delete-comida', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Cpf: cpf
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    alert("Deletado com sucesso, nos vemos amanhã!!");
}

let attColaborador = () => {

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    fetch('http://localhost:3000/colaborador-att', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Nome: nome,
                Cpf: cpf
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    attComida();
}

let deleteColaborador = () => {
    let cpf = document.getElementById("cpf").value;
    fetch('http://localhost:3000/delete-colaborador', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Cpf: cpf
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    deleteComida();
}
