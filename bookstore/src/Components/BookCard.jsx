import React from 'react';

export default function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Title: {book.title}</h5>
        <p className="card-text">ISBN: {book.isbn}</p>
        <p className="card-text">Author ID: {book.authorId}</p>
        <p className="card-text">Publisher ID: {book.publisherId}</p>
        <p className="card-text">Publish Year: {book.publishYear}</p>
        <p className="card-text">Copies Available: {book.copiesAvailable}</p>
        <button className="btn btn-info btn-sm mr-2" onClick={onEdit}>
          Update
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
