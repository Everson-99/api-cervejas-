import express from 'express';
const router = express.Router();
import { criarCervejas, getCervejas, atualizarCerveja, apagarCerveja,getCervejasId } from '../controllers/cerveja.js'; // Alterado para 'cerveja.js'

// Listagem de informações
router.get('/cervejas', getCervejas); // Alterado para getCervejas
// Criação
router.post('/cervejas', criarCervejas); // Alterado para criarCervejas
// Atualizacao
router.put('/cervejas/:id', atualizarCerveja); // Alterado para atualizarCerveja
// Apagar
router.delete('/cervejas/:id', apagarCerveja); // Alterado para apagarCerveja
//consultar cervejas pelo id
router.get('/cervejas/:id', getCervejasId);//consultar a cerveja pelo id
export { router };


