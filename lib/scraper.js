const request = require('./request');
const parser = require('./parser')
const store = require('./store')

request()
    .then(document => parser(document))
    .then(products => store(products))
    .then(console.log);