import React from 'react';

export default function BookForm({ newBook, onSubmit, onChange, editMode }) {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="isbn"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          name="authorId"
          placeholder="Author ID"
          value={newBook.authorId}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          name="publisherId"
          placeholder="Publisher ID"
          value={newBook.publisherId}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          name="publishYear"
          placeholder="Publish Year"
          value={newBook.publishYear}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          name="copiesAvailable"
          placeholder="Copies Available"
          value={newBook.copiesAvailable}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        {editMode ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
}
