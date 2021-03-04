const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('./models/home');
const Home = mongoose.model('Home');
require('./models/orcamento');
const Orcamento = mongoose.model('Orcamento');

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  ap.use(cors());
  next();

});

mongoose.connect('mongodb://localhost:27017/celke2', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log("Conxeão realizado com sucesso no mongodb");
}).catch(err => {
  console.log("Error: Conxeão não realizado com sucesso no mongodb");

})

app.get('/home', async (req, res) => {
  const home = await Home.findOne({});

  if (!home) {
    return res.status(400).json({
      error: true,
      message: "Nenhum registro encontrado!"
    });
  }

  return res.json({
    error: false,
    home
  });
});

app.post('/home', async (req, res) => {
  const dados = {
    "topTitle": "Temos a solução que a sua empresa precisa!",
    "topSubtitle": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
    "topTextBtn": "Orçamento",
    "topLinkBtn": "http://localhost:3000/orcamento",

    "serviceTitle": "Serviços",
    "serviceSubtitle": "Featured content or information",
    "serviceIconOne": "laptop-code",
    "serviceTitleOne": "Serviço um",
    "serviceDescOne": "Praesent quis sagittis libero, nec suscipit neque. Quisque ut ultrices lectus, sit amet sollicitudin mauris.",
    "serviceIconTwo": "mobile-alt",
    "serviceTitleTwo": "Serviço dois",
    "serviceDescTwo": "Nullam rutrum imperdiet nisi, eget facilisis elit consectetur accumsan lectus, sit amet sollicdin efficitur.",
    "serviceIconThree": "network-wired",
    "serviceTitleThree": "Serviço tres",
    "serviceDescThree": "Quisque elementum suscipit dolor, sed lobortis nibh. Curabitur et dui iaculis, consectetur enim vitae purus.",
  }

  const homeExiste = await Home.findOne({});
  if (homeExiste) {
    return res.status(400).json({
      error: true,
      message: "Erro: A página home já possui um registro!"
    });
  }

  await Home.create(dados, (err) => {
    if (err) return res.status(400).json({
      error: true,
      message: "Erro: Conteúdo da página home não cadastrado com sucesso!"
    });
  });

  return res.json({
    error: false,
    message: "Conteúdo da página home cadastrado com sucesso!"
  });
});

app.post('/orcamento', async (req, res) => {

  await Orcamento.create(req.body, (err) => {
    if (err) return res.status(400).json({
      error: true,
      message: "Erro: Solicitação de orçamento enviado com sucesso!"
    });
  });

  return res.json({
    error: false,
    message: "Solicitação de orçamento enviado com sucesso!"
  });
});

app.listen(3333, () => {
  console.log('Server on port 3333: http://localhost:3333');
});