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

// @route GET /api/book/search/:searchTerm?searchType=isbn
// @route GET /api/book/search/:searchTerm?searchType=author
// @route GET /api/book/search/:searchTerm?searchType=title
// @desc makes a query to the db and searches for book, relays to gbooks if necessary 🔒
router.get(
    '/api/book/search/:searchTerm',
    passport.authenticate('jwt', { session: false }),
    BookController.getBook
);

router.post(
    '/api/book/create',
    passport.authenticate('jwt', { session: false }),
    BookController.createBookRecord
);

// @route POST api/book 🔒
// @desc add book/user crossref record
router.post('/api/book', passport.authenticate('jwt', { session: false }), BookController.addBook);

export default router;
