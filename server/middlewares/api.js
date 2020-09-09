const express = require('express');
const router = express.Router();
var id = 0;
const allStrings = [{ id, text: 'this is a string sent from the server' }];

router.use((req, res, next) => {
  console.log('something is happening');
  next();
});

router.get('/', (req, res) => {
  res.send(allStrings);
});

module.exports = router;
