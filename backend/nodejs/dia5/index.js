const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const validateProduct = (req, res, next) => {
  const { productName } = req.body;
  if (!productName) {
    res.status(400).json({ message: "O campo productName é obrigatório" })
  }
  if (productName.length < 4) {
    res.status(400).json({ message: "O campo productName deve ter pelo menos 4 caracteres" })
  }
  next();
}

const validateInfos = (req, res, next) => {
  const { infos: { saleDate, warrantyPeriod }} = req.body;
  if (!infos) {
    res.status(400).json({ message: "O campo infos é obrigatório" } );
  }
  if (!saleDate) {
    res.status(400).json({ message: "O campo saleDate é obrigatório" });
  }
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!dateRegex.test(saleDate)) {
    res.status(400).json({ message: "O campo saleDate não é uma data válida" });
  }
  if (!warrantyPeriod) {
    res.status(400).json({ message: "O campo warrantyPeriod é obrigatório" });
  }
  if (warrantyPeriod.length > 3 || warrantyPeriod.length < 1) {
    res.status(400).json({ message: "O campo warrantyPeriod precisa estar entre 1 e 3" })
  }
  next();
}

app.post('/sales', validateProduct, validateInfos, (_req, res) => {
  res.status(201).json({ message: "Venda cadastrada com sucesso" });
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});