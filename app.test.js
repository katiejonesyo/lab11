const fs = require('fs');
const pool = require('./utils/pool');
const request = require('supertest');
const app = require('./app');
const Book = require('./models/Book');

describe('CRUD routes for Book model', () => {

  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
    
  afterAll(() => {
    return pool.end();
  });
 
  it('Finds book by id via GET', async() => {
    const book = await Book.insert({
      title: 'Little Red Riding Hood',
      coverImage: 'www.littlered.com',
      rating: 4,
      price: '$25',
      inStock: true
    });

    const res = await request(app)
      .get(`/api/v1/books/${book.id}`);

    expect(res.body).toEqual({
      id: '1',
      title: 'Little Red Riding Hood',
      coverImage: 'www.littlered.com',
      rating: '4',
      price: '$25',
      inStock: true
    });
  });

});



