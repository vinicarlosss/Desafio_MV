const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.use(express.json());
//String de conexão
const connection = mysql.createConnection({
    hose: 'localhost',
    user: 'root',
    port: 3306,
    password: '1998ronca',
    database: 'breakfast'
});

//conexão com o banco
connection.connect(function(error){
    if(!!error){
        console.log(error)
    }else{
        console.log("Conectado")
    }
})

//Métodos para integração

router.post('/colaborador-add', (req,res) => {
    let {Nome, Cpf, Comida}= req.body;
    connection.query(`INSERT INTO colaborador(nome, cpf) VALUES ('${Nome}', '${Cpf}');`,
    (error, rows) => {
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
    connection.query(`INSERT INTO alimento (comida, cpf) VALUES ('${Comida}', '${Cpf}')`,
    (error, rows) => {
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
})

module.exports = router;
