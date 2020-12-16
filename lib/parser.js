const parser = document => {
    const books = document.querySelectorAll('');
    return [...books].map(book => ({
        title: book.querySelectorAll(''),
        coverImage: book.querySelectorAll(''),
        rating: book.querySelectorAll(''),
        price: book.querySelectorAll(''),
        inStock: book.querySelectorAll(''),
    }))
};

module.exports=parser;

