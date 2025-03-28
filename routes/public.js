import express from 'express'
import mysql from 'mysql2'  
import bcrypt from 'bcrypt'

const router = express.Router()

// Criação da conexão com o banco MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Substitua com seu usuário MySQL
    password: 'Z5R2M9IQ',  // Substitua com sua senha MySQL
    database: 'postagem'  // Substitua com o nome do seu banco de dados
})

// Cadastro de usuário
router.post('/cadastro', async (req, res) => {
    const  { nome, email, senha } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashSenha = await bcrypt.hash(senha, salt)

    try{
   
    // Query para inserir o usuário no banco de dados
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';

    // Executando a query de inserção
    db.query(query, [nome, email, hashSenha], (err, result) => {
        if (err) {
            console.error('Erro ao inserir usuário:', err)
            return res.status(500).json({ error: 'Erro ao salvar usuário no banco de dados' })
        }

        // Retorno de sucesso
        res.status(201).json({ message: 'Usuário registrado com sucesso', user: { nome, email, senha } })
    })
}
catch(err){
    res.status(500).json({message:'Erro no Servidor, tente novamente'})


}
})

export default router
