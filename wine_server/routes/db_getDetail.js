const express = require('express');
const router = express.Router();

const { Wine_detail } = require('../models_wine');
const { People_detail } = require('../models_people');

router.get('/wine', async (req, res) => {
    try {
        const wine_detail = await Wine_detail.findOne({
            id: req.query.id
        });
        res.json(wine_detail).end();
    } catch (e) {
        console.log(e);
    }
})
router.get('/people', async (req, res) => {
    try {
        console.log(req.query.id[0]);
        const people_detail = await People_detail.findOne({
            id: req.query.id[0]
        });
        res.json(people_detail.people[req.query.id[1]]).end();

    } catch (e) {
        console.log(e);
    }
})

module.exports = router;