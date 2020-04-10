import express from 'express';
const router = express.Router();
import passport from 'passport';
import { RegisterController, LoginController } from '../controllers/userController';

// @route POST api/user/register
// @desc handles user registration from client
router.post('/api/user/register', RegisterController);

// @route POST api/user/login
// @desc handles user login from client
router.post('/api/user/login', LoginController);

// @route GET api/user/validate
// @desc tests validation of json web token
router.get('/api/user/validate', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).json('Authorized');
});

export default router;
