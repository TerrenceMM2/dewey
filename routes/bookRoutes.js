import express from 'express';
import BookController from '../controllers/bookController';
const router = express.Router();

// @route GET api/book/test
// @desc tests the books api route
router.get('/api/book/test', BookController.test);

// @route GET api/book
// @desc gets all books
router.get('/api/book', BookController.getAll);

export default router;
