import express from 'express';
const router = express.Router();
const root = require('path').join(__dirname, 'build');

// @route GET *
// @desc catch all route
router.get('*', (req, res) => {
    res.sendFile('index.html', { root });
});

export default router;
