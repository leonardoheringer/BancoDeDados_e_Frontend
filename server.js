import express from 'express'
import publicRouter from './routes/public.js'


const app = express();
app.use(express.json())

app.use('/', publicRouter)

app.listen(3000, ()=> console.log("Servidor Rodando 🚀"))
