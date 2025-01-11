const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');

// Create a user using: POST "/api/auth/". Doesn't require Auth
router.post('/', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
] , (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
    .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    });
});

module.exports = router;