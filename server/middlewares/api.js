const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const allStrings = [];

router.use(bodyParser.json());

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  res.send(allStrings);
});

router.post('/add', (req, res) => {
  console.log(req.body);
  allStrings.unshift(req.body);
  res.send('string added');
});

module.exports = router;
