const express = require('express');
const router = express.Router();
const { Process } = require('../models_process');

router.get('/create', async (req, res) => {
    const process = await Process.find();
    try {
        const c = await Process.create({
            id: req.body.id,
            flavor: req.body.flavor,
            steps: req.body.steps,
            click: req.body.click
        })
        res.send(c);
    } catch (e) {
        console.log(e);
    }
    // res.send(process);
})

router.post('')

module.exports = router;