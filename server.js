const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Z5R2M9IQ', // Substitua com sua senha MySQL
    database: 'sabor_do_brasil'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL!');
});

// Configurar o Express para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota de login
app.post('/login', (req, res) => {
    const { nome, senha } = req.body;

    db.query('SELECT * FROM usuarios WHERE nome = ? AND senha = ?', [nome, senha], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send({ message: 'Login bem-sucedido!' });
        } else {
            res.send({ message: 'Usuário ou senha incorretos!' });
        }
    });
});

// Rota de votos (like ou dislike)
app.post('/vote', (req, res) => {
    const { post_id, action } = req.body;

    if (action === 'like') {
        db.query('UPDATE postagens SET likes = likes + 1 WHERE id = ?', [post_id], (err, result) => {
            if (err) throw err;
            res.send({ message: 'Like registrado!' });
        });
    } else if (action === 'dislike') {
        db.query('UPDATE postagens SET dislikes = dislikes + 1 WHERE id = ?', [post_id], (err, result) => {
            if (err) throw err;
            res.send({ message: 'Dislike registrado!' });
        });
    } else {
        res.status(400).send({ message: 'Ação inválida' });
    }
});

// Rota para obter as postagens
app.get('/posts', (req, res) => {
    db.query('SELECT * FROM postagens', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
