const Book = require('../models/Book')

const store = async(books) => {
    return Promise.all(books.map(book => Book.insert(book)));
  };
  
  module.exports = store;

