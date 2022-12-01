const express = require('express');
const router = express.Router();
const { Process } = require('../models_process');

router.get('/', async (req, res) => {
  try {
    const process = await Process.find()
    res.json(process).end();
  } catch (e) {
    console.log(e);
  }
  // let ret = process[req.query.id];
});

module.exports = router;