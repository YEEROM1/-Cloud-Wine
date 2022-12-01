const express = require('express');
const router = express.Router();
const { Feature } = require('../models_feature');

router.get('/', async (req, res) => {
  try {
    const feature = await Feature.find()
    res.json(feature).end();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;