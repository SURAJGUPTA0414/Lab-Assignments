// 

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

export default function AxiosDemo() {
  const url = "http://localhost:4000/books";
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    isbn: '',
    authorId: '',
    publisherId: '',
    publishYear: '',
    copiesAvailable: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);

  useEffect(() => {
    handleBooks();
  }, []);

  async function handleBooks() {
    const response = await axios.get(url);
    if (Array.isArray(response.data)) {
      setBooks(response.data);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const AddNewBook = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, newBook);
    if (response.status === 201) {
      handleBooks();
      resetForm();
    }
  };

  const DeleteBook = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    if (response.status === 200) {
      handleBooks();
    }
  };

  const EditBook = (book) => {
    setEditMode(true);
    setNewBook({
      title: book.title,
      isbn: book.isbn,
      authorId: book.authorId,
      publisherId: book.publisherId,
      publishYear: book.publishYear,
      copiesAvailable: book.copiesAvailable,
    });
    setCurrentBookId(book.id);
  };

  const UpdateBook = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${url}/${currentBookId}`, newBook);
    if (response.status === 200) {
      handleBooks();
      resetForm();
    }
  };

  const resetForm = () => {
    setNewBook({
      title: '',
      isbn: '',
      authorId: '',
      publisherId: '',
      publishYear: '',
      copiesAvailable: '',
    });
    setEditMode(false);
    setCurrentBookId(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Book List</h2>
      <BookList books={books} onEdit={EditBook} onDelete={DeleteBook} />
      
      <h2 className="text-center mb-4">{editMode ? 'Update Book' : 'Add New Book'}</h2>
      <BookForm 
        newBook={newBook} 
        onSubmit={editMode ? UpdateBook : AddNewBook} 
        onChange={handleInputChange} 
        editMode={editMode} 
      />
    </div>
  );
}
