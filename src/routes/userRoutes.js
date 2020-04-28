import express from 'express';
import passport from 'passport';
import UserController from '../controllers/userController';
const router = express.Router();

// @route GET api/user/books
// @desc gets all books of user
router.get(
    '/api/user/books',
    passport.authenticate('jwt', { session: false }),
    UserController.getUserBooks
);

// @route DELETE api/user/book
// @desc deletes user book
router.delete(
    '/api/user/book',
    passport.authenticate('jwt', { session: false }),
    UserController.deleteUserBook
);

// @route PUT api/auth/update
// @desc updates a users profile
router.put(
    '/api/user/update',
    passport.authenticate('jwt', { session: false }),
    UserController.updateUser
);

export default router;
