const pool = require('../utils/pool');


module.exports = class Book {
    id;
    title;
    cover_image;
    rating;
    price;
    in_stock;


    constructor(row) {
      this.id = row.id;
      this.title = row.title;
      this.coverImage =row.cover_image;
      this.rating = row.rating;
      this.price = row.price;
      this.inStock = row.in_stock;
    }
    
    // Create
    static async insert({ title, coverImage, rating, price, inStock = [] }) {
      const { rows } = await pool.query(
        'INSERT INTO books (title, cover_image, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, coverImage, rating, price, inStock]
      );


      return new Book(rows[0]);
    };

    // Find

    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM books'
        );

      return rows.map(row => new Book(row));
    };


    static async findById(id) {
      const { rows } = await pool.query(
        `SELECT * FROM books
          WHERE id=$1`,
        [id]);

      if(!rows[0]) throw new Error(`No books found for id ${id}`);

      return new Book(rows[0])
      }
    

    // Update
    static async update(id, { title, coverImage, rating, price, inStock  }) {
      const { rows } = await pool.query(
        `UPDATE books
            SET
              title=$1,
              cover_image=$2,
              rating=$3,
              price=$4,
              in_stock=$5
            WHERE id=$6
            RETURNING *`,
        [ title, coverImage, rating, price, inStock, id]
      )

      return new Book(rows[0]);
    };
    

     // Delete
     static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM books WHERE id=$1 RETURNING *',
        [id]);
  
      return new Book(rows[0]);
    }
};