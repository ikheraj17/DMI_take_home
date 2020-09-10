const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const allStrings = [];
let id = 1;

router.use(bodyParser.json());

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  res.send(allStrings);
});

router.post('/add', (req, res) => {
  console.log(req.body);
  const toAttach = { id, text: req.body.text };
  allStrings.unshift(toAttach);
  id += 1;
  res.send('string added');
});

module.exports = router;
