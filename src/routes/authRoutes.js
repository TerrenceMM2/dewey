import express from 'express';
import passport from 'passport';
import AuthController from '../controllers/authController';
const router = express.Router();

// @route GET api/user/test
// @desc tests the user api route
router.get('/api/user/test', AuthController.test);

// @route POST api/user/register
// @desc handles user registration from client
router.post('/api/user/register', AuthController.register);

// @route POST api/user/login
// @desc handles user login from client
router.post('/api/user/login', AuthController.login);

// @route GET api/user/validate
// @desc tests validation of json web token
router.get(
    '/api/user/validate',
    passport.authenticate('jwt', { session: false }),
    AuthController.validate
);
