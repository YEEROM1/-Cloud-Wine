const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json().end();
})

router.get('/h_wiki_data', function (req, res) {
    res.json().end();
})

module.exports = router