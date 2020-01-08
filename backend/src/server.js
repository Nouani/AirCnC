const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-uoioe.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')))
app.use(routes);

app.listen(3333);

/* TIPOS DE PARAMETROS */
// Query params => /users + ?=idade => req.query.idade
// req.query => acessar query params

// Route params => /users + /:id => req.params.id
// req.params => acessar route params

// Body params => /users + JSON => req.body.qualquerCoisa
// req.body => acessar body params

/* TIPOS DE ROTAS */
// GET: buscar dados
// POST: adicionar dados
// PUT: alterar dados
// DELETE: remover dados