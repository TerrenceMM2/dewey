import db from '../models';

exports.test = async function (query) {
  try {
    return {
      error: false,
      statusCode: 200,
      msg: 'Testing endpoint works correctly.',
    };
  } catch (errors) {
    return {
      error: true,
      statusCode: 500,
      errors,
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
      data: items,
    };
  } catch (error) {
    return {
      error: true,
      statusCode: 500,
      errors,
    };
  }
};
