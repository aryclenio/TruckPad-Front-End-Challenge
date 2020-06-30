const express = require("express");
const { uuid } = require("uuidv4");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors());

const drivers = [];

app.get("/drivers", (req, res) => {
  return res.send(drivers);
});

app.post("/drivers", (req, res) => {
  const { name, phone, birth, cnh, chnType, cpf } = req.body;
  const driver = { id: uuid(), name, phone, birth, cnh, chnType, cpf };
  drivers.push(driver);

  return res.json(driver);
});

app.put("/drivers/:id", (req, res) => {
  const { id } = req.params;
  const { name, phone, birth, cnh, chnType, cpf } = req.body;
  const driverIndex = drivers.findIndex((driver) => driver.id === id);

  if (driverIndex < 0) {
    return res.status(404).json({ error: "Driver not found!" });
  }
  const driver = {
    id,
    name,
    phone,
    birth,
    cnh,
    chnType,
    cpf
  };
  //Atualiza o valor de project
  drivers[driverIndex] = driver;
  return res.json(driver);
});

module.exports = app;

