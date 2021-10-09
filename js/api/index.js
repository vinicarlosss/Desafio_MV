const express = require('express');

const app = express();

app.use(require('./database/colaborador.js'));


app.listen(3000, () => {
    console.log("O servidor está rodando");
})