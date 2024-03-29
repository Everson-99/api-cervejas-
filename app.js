// Importação de pacotes e arquivos
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes/Cerveja.js'
import { sequelize } from './database.js'

try {
    sequelize.sync()
} catch(erro) {
    console.log(erro)
}

// Inicializando o pacote express
const app = express()
// Configurando o reconhecimento de JSON
app.use(express.json())
app.use(cors())
// Utilizando o arquivo de rotas importado na linha 3
app.use(router)
// Iniciando o servidor na porta 3000
app.listen(3000, () => console.log('Servidor iniciado'))
