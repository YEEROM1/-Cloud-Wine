const express = require('express');
const router = express.Router();
const history = require('../public/history.json')
const h_wiki_data = require('../public/h_wiki_data.json')

router.get('/', function (req, res) {
    res.json(history).end();
})

router.get('/h_wiki_data', function (req, res) {
    res.json(h_wiki_data).end();
})

module.exports = router