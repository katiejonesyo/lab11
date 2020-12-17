const { Parser } = require("dashdash");

const parser = document => {
    const books = document.querySelectorAll('.product_pod');
    
    return [...books].map(book => ({
        title: book.querySelectorAll('h3').textContent,
        coverImage: book.querySelectorAll('img').src,
        rating: book.querySelectorAll('.star-rating').className.split('')[1],
        price: book.querySelectorAll('.price_color').textContent,
        inStock: book.querySelectorAll('.inStock'),
    }))
};

module.exports = parser;

