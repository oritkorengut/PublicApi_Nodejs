const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger.json");
const axios = require("axios");
const dotenv = require("dotenv")
const logRequest = require("./logRequest");
const db = require("./config/db");
dotenv.config();
db.connectToServer();

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: false }));


app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
app.use(logRequest);
app.get('/entries', async (req, res) => {
  const { data } = await axios.get(`https://api.publicapis.org${req.originalUrl}`);
  return res.status(200).json(data);
});
app.get('/categories', async (req, res) => {
  const { data } = await axios.get("https://api.publicapis.org/categories");
  return res.status(200).json(data);
});
app.get('/health', async (req, res) => {
  const { data } = await axios.get("https://api.publicapis.org/health");
  return res.status(200).json(data);
});
app.get('/random', async (req, res) => {
  const { data } = await axios.get(`https://api.publicapis.org${req.originalUrl}`);
  return res.status(200).json(data);
});
app.get('/popularApis', async (req, res) => {
  const data = await db.getDb()
    .collection("apiLogger")
    .find().toArray().then((apisData) => {
      let mp = new Map();
      for (let i = 0; i < apisData.length; i++) {
        if (mp.has(apisData[i].apiPath)) {
          mp.set(apisData[i].apiPath, mp.get(apisData[i].apiPath) + 1)
        } else {
          mp.set(apisData[i].apiPath, 1)
        }
      }

      // Create a list from elements of HashMap
      let list = [...mp];

      // Sort the list
      list.sort((element1, element2) => {
        if (element1[1] == element2[1])
          return element2[0] - element1[0];
        else
          return element2[1] - element1[1];
      })
      return list.map(e => { return { api: e[0], count: e[1] } });
    });
  return res.status(200).json(data);
});


app.listen(8000, () => {
  console.log("hi we listen to port 8000")
})

