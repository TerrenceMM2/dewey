import express from 'express';
import passport from 'passport';
import AuthController from '../controllers/authController';
const router = express.Router();

// @route GET api/auth/test
// @desc tests the auth api route
router.get('/api/auth/test', AuthController.test);

// @route POST api/auth/register
// @desc handles user registration from client
router.post('/api/auth/register', AuthController.register);

// @route POST api/auth/login
// @desc handles user login from client
router.post('/api/auth/login', AuthController.login);

// @route GET api/auth/validate
// @desc tests validation of json web token
router.get(
    '/api/auth/validate',
    passport.authenticate('jwt', { session: false }),
    AuthController.validate
);

// @route PATCH api/auth/password
// @desc updates password from protected form
router.patch(
    '/api/auth/password',
    passport.authenticate('jwt', { session: false }),
    AuthController.updatePassword
);

export default router;
