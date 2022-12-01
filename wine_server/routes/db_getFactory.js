const express = require('express');
const router = express.Router();

const { Factory } = require('../models_factory');

router.get('/', async (req, res) => {
    try {
        const factory = await Factory.find();
        res.json(factory).end();
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;