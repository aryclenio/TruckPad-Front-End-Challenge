const express = require("express");
const { uuid } = require("uuidv4");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors());

const drivers = [];

app.get("/drivers", (req, res) => {
  const { name } = req.query;
  const results = name
    ? drivers.filter((driver) => driver.name.includes(name))
    : drivers;
  return res.send(results);
});

app.post("/drivers", (req, res) => {
  const { active, name, phone, birth, cnh, cnhType, cpf } = req.body;
  const driver = { id: uuid(), active, name, phone, birth, cnh, cnhType, cpf };
  drivers.push(driver);

  return res.json(driver);
});

app.put("/drivers/:id", (req, res) => {
  const { id } = req.params;
  const { active, name, phone, birth, cnh, cnhType, cpf } = req.body;
  const driverIndex = drivers.findIndex((driver) => driver.id === id);

  if (driverIndex < 0) {
    return res.status(404).json({ error: "Driver not found!" });
  }
  const driver = {
    id,
    active,
    name,
    phone,
    birth,
    cnh,
    cnhType,
    cpf
  };
  //Atualiza o valor de project
  drivers[driverIndex] = driver;
  return res.json(driver);
});

module.exports = app;

