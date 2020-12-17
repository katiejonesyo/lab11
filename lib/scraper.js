require('dotenv').config();
const request = require('./request');
const parser = require('./parser')
const store = require('./store')

request()
    .then(document => parser(document))
    .then(books => store(books))
    .then(book => console.log(book.length));
