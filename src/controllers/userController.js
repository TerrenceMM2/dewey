import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { registerValidation, loginValidation } from './validationHelper';
const db = require('../models');
const { secretOrKey } = require('../config/keys');

module.exports = {
  RegisterController: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const { error } = await registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailRegistered = await db.user.findOne({ where: { email } });
    if (emailRegistered) return res.status(400).send('Email already in use.');

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const newUser = {
      firstName,
      lastName,
      email,
      password: hash,
    };

    try {
      await db.user.create(newUser);
      res.status(200).send(`Welcome aboard, ${firstName}!`);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  LoginController: async (req, res) => {
    const { email, password } = req.body;

    const { error } = await loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const userFound = await db.user.findOne({ where: { email } });
    if (!userFound) return res.status(400).send('Email or password is incorrect.');

    const match = await bcrypt.compare(password, userFound.password);
    if (!match) return res.status(400).send('Email or password is incorrect.');

    const payload = {
      id: userFound.id,
      email: userFound.email,
    };
    const token = await jwt.sign(payload, secretOrKey, { expiresIn: '1hr' });
    res.status(200).send({ token: `Bearer ${token}` });
  },
};
