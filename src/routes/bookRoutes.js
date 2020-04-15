import express from 'express';
import passport from 'passport';
import BookController from '../controllers/bookController';
const router = express.Router();

// @route GET api/book/test
// @desc tests the books api route
router.get('/api/book/test', BookController.test);

// @route GET api/book
// @desc gets all books
router.get('/api/book', BookController.getAll);

// @route GET api/book/:isbn
// @desc get book by isbn
router.get(
    '/api/book/:isbn',
    passport.authenticate('jwt', { session: false }),
    BookController.getBookIsbn
);

// @route POST api/book
// @desc add book/user crossref record
router.post('/api/book', passport.authenticate('jwt', { session: false }), BookController.addBook);

export default router;
