const express = require('express');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json([]);
});

exports = module.exports = router;