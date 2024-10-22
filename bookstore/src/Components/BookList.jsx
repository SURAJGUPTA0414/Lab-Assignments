import React from 'react';
import BookCard from './BookCard';

export default function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="row">
      {books && books.map((book, index) => (
        <div key={index} className="col-md-4 mb-3">
          <BookCard
            book={book}
            onEdit={() => onEdit(book)}
            onDelete={() => onDelete(book.id)}
          />
        </div>
      ))}
    </div>
  );
}
