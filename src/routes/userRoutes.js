import express from 'express';
import passport from 'passport';
import UserController from '../controllers/userController';
const router = express.Router();

// @route GET api/user/test
// @desc tests the user api route
router.get('/api/user/test', UserController.test);

// @route POST api/user/register
// @desc handles user registration from client
router.post('/api/user/register', UserController.register);

// @route POST api/user/login
// @desc handles user login from client
router.post('/api/user/login', UserController.login);

// @route GET api/user/validate
// @desc tests validation of json web token
router.get(
  '/api/user/validate',
  passport.authenticate('jwt', { session: false }),
  UserController.validate
);

export default router;
