import db from '../models';

const createBooks = async bookData => {
    try {
        let newBooks = [];

        // Creates local DB record for each book returned from gbBooks
        for (let i = 0; i < bookData.length; i++) {
            // checks if the book record exists in our database by isbn
            const book = await db.book.findOne({
                where: {
                    isbn: bookData[i].isbn
                }
            });

            // if it doesn't, go ahead and create that new record
            if (!book) {
                const newBook = await db.book.create(bookData[i]);

                // push the new record to an array
                newBooks.push(newBook.dataValues);
            }
            console.log(newBooks);
        }

        // return all new book records
        return newBooks;
    } catch (error) {
        return {
            error
        };
    }
};

export default createBooks;
