import { Cerveja } from "../models/Cerveja.js";


const criarCervejas = async (req, res) => {
  try {
    const { nome, abv, tipo, nacionalidade } = req.body;
    if (!nome || !abv || !tipo || !nacionalidade) {
      return res.status(400).send({ message: "Dados Incompletos" });
    }
    const novaCerveja = { nome, abv, tipo, nacionalidade };
    const resultado = await Cerveja.create(novaCerveja);
    res
      .status(201)
      .send({ message: "Cerveja criada com sucesso", data: resultado });
  } catch (err) {
    res.status(500).send({ message: "Houve um erro na criação" });
  }
};

const getCervejas = async (req, res) => {
  try {
    const cervejas = await Cerveja.findAll();
    res.status(200).send({ message: "Cervejas Encontradas", data: cervejas });
  } catch (err) {
    res.status(500).send({ message: "Houve um erro na busca" });
  }
};

const atualizarCerveja = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, abv, tipo, nacionalidade } = req.body;
    if (!nome || !abv || !tipo || !nacionalidade) {
      return res.status(400).send({ message: "Dados Incompletos" });
    }

    const cervejaAtualizada = { nome, abv, tipo, nacionalidade };
    const resultado = await Cerveja.update(cervejaAtualizada, {
      where: { id: id },
    });
    res.status(200).send({ message: "Cerveja atualizada", resultado: resultado });
  } catch (err) {
    res.status(500).send({ message: "Erro na atualização" });
  }
};

const apagarCerveja = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "ID não informado" });
    }
    const resultado = await Cerveja.destroy({ where: { id: id } });
    res.status(200).send({ message: "Cerveja excluída", resultado: resultado });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Erro ao deletar" });
  }
};

const getCervejasId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "ID não informado" });
    }
    const resultado = await Cerveja.findByPk(id);
    res.status(200).send({ message: "Cerveja consultada", resultado: resultado });
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ message: "Erro ao deletar" });
  }
}

export { getCervejas, criarCervejas, atualizarCerveja, apagarCerveja, getCervejasId };
