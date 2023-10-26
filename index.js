const express = require("express");
const app = express();
const port = 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/soma", (req, res) => {
  let data = req.body;
  console.log(data);
  let resultado = soma(data.a, data.b);

  res.send(`O resultado da soma de ${data.a} e ${data.b} é ${resultado}.`);
});

app.post("/subtracao", (req, res) => {
  let data = req.body;
  console.log(data);
  let resultado = subtracao(data.a, data.b);

  res.send(`O resultado da subtração de ${data.a} e ${data.b} é ${resultado}.`);
});

app.post("/multiplicacao", (req, res) => {
  let data = req.body;
  console.log(data);
  let resultado = multiplicacao(data.a, data.b);

  res.send(`O resultado da multiplicação de ${data.a} e ${data.b} é ${resultado}.`);
});

app.post("/divisao", (req, res) => {
  let data = req.body;
  console.log(data);
  let resultado = divisao(data.a, data.b);

  res.send(`O resultado da divisão de ${data.a} e ${data.b} é ${resultado}.`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}
