require('dotenv').config();
const request = require('./request');
const parser = require('./parser')
const store = require('./store')

request()
    .then(document => parser(document))
    .then(books => store(books))
    .then(res => console.log(res.length));
