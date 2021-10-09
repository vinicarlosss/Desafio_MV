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
    let {Nome, Cpf}= req.body;
    connection.query(`INSERT INTO colaborador(nome, cpf) VALUES ('${Nome}', '${Cpf}');`,
    (error, rows) => {
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
})

router.post('/comida-add', (req,res) => {
    let {Cpf, Comida}= req.body;
    connection.query(`INSERT INTO alimento(cpf, comida) VALUES ('${Cpf}', '${Comida}');`,
    (error, rows) => {
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
})

router.post('/comida-att', (req,res) => {
    let {Cpf, Comida}= req.body;
    connection.query(`UPDATE alimento SET cpf = '${Cpf}', comida = '${Comida}'  WHERE cpf = '${Cpf}';`,
    (error, rows) => {
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
})

router.post('/colaborador-att', (req,res) => {
    let {Nome, Cpf}= req.body;
    connection.query(`UPDATE colaborador SET nome = '${Nome}', cpf = '${Cpf}'  WHERE cpf = '${Cpf}';`,
    (error, rows) => {
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
})

router.delete('/delete-colaborador', (req,res) =>{
    let {Cpf} = req.body;
    connection.query(`DELETE FROM colaborador WHERE cpf = '${Cpf}';`,
    (error, rows) => {
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
})

router.delete('/delete-comida', (req,res) =>{
    let {Cpf} = req.body;
    connection.query(`DELETE FROM alimento WHERE cpf = '${Cpf}';`,
    (error, rows) => {
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    })
})

router.get('/breakfest-list', (req,res) => {
    connection.query(`SELECT U.nome, F.cpf, F.comida FROM (colaborador as U, alimento as F) WHERE F.cpf = U.cpf;`,
    (error,rows) => {
        if(!!error){
            res.send(error);
        }else{
            res.send(rows);
        }
    });
});



module.exports = router;
