import db from '../models';
const axios = require('axios');

exports.test = async query => {
    try {
        return {
            error: false,
            statusCode: 200,
            msg: 'Testing endpoint works correctly.'
        };
    } catch (errors) {
        return {
            error: true,
            statusCode: 500,
            errors
        };
    }
};

exports.getAll = async () => {
    try {
        const items = await db.book.findAll();
        const total = items.length;

        return {
            error: false,
            statusCode: 200,
            total,
            data: items
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};

exports.getBookIsbn = async isbn => {
    try {
        const gbData = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
        );

        return {
            error: false,
            statusCode: 200,
            data: gbData.data.items
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};
