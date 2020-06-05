import express from 'express';
const router = express.Router();
const path = require('path');

// @route GET *
// @desc catch all route
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

export default router;
