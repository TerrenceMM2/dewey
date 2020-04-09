import express from 'express';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import passport from 'passport';
const router = express.Router();
const db = require('../models');

router.get('/api/user/register', (req, res) => {
  res.json('hello');
});

export default router;
