// const express = require('express');
// const axios = require("axios");
// const router = express.Router()
// router.get('/entries', async (req, res) => {
//     const { data } = await axios.get(`https://api.publicapis.org${req.originalUrl}`);
//     return res.status(200).json(data);
//   });
//   router.get('/categories', async (req, res) => {
//     const { data } = await axios.get("https://api.publicapis.org/categories");
//     return res.status(200).json(data);
//   });
//   router.get('/health', async (req, res) => {
//     const { data } = await axios.get("https://api.publicapis.org/health");
//     return res.status(200).json(data);
//   });
//   router.get('/random', async (req, res) => {
//     const { data } = await axios.get(`https://api.publicapis.org${req.originalUrl}`);
//     return res.status(200).json(data);
//   });
//   router.get('/popularApis', async (req, res) => {
//     const data = await db.getDb()
//       .collection("apiLogger")
//       .find().toArray().then((apisData) => {
//         let mp = new Map();
//         for (let i = 0; i < apisData.length; i++) {
//           if (mp.has(apisData[i].apiPath)) {
//             mp.set(apisData[i].apiPath, mp.get(apisData[i].apiPath) + 1)
//           } else {
//             mp.set(apisData[i].apiPath, 1)
//           }
//         }
  
//         // Create a list from elements of HashMap
//         let list = [...mp];
  
//         // Sort the list
//         list.sort((element1, element2) => {
//           if (element1[1] == element2[1])
//             return element2[0] - element1[0];
//           else
//             return element2[1] - element1[1];
//         })
//         return list.map(e => { return { api: e[0], count: e[1] } });
//       });
//     return res.status(200).json(data);
//   });
//     module.exports = router;

  