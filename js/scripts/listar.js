let cadBreakfast = document.querySelector('.card-breakfast');
let tbody = document.querySelector('.card-breakfast').getElementsByTagName('tbody')[0];

let listBreakfast = () =>{
    fetch('http://localhost:3000/breakfest-list')
    .then(response => response.json())
    .then(data => printBreakfast(data))
};

let addRow = (newRow, containerValue) => {
    let newCell = newRow.insertCell();
    let newValue = document.createTextNode(containerValue);
    newCell.appendChild(newValue);
};

let printBreakfast = (data) =>{
    let container = {};
    tbody.innerHTML = ''
    cadBreakfast.style.display = 'block';

    data.map(item =>{
        container['Nome'] = item.nome;
        container['Cpf'] = item.cpf;
        container['Opção'] = item.comida;
        var newRow = tbody.insertRow();
        addRow(newRow, container ['Nome']);
        addRow(newRow, container['Cpf']);
        addRow(newRow, container['Opção']);
    });
};