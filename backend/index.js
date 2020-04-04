const express = require('express');

const app = express();

app.get('/', (request, respose) => {
    return respose.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Vitor Felix',
    });
});

app.listen(3333);