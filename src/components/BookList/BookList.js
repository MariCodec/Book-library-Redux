import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./BookList.css";
import { clearBook, deleteBook } from "../../redux/books/actionCreators";
export const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleClearBooks = () => {
    dispatch(clearBook());
  };
  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>no books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <div className="book-info">
                {book.title}by <strong> {book.author}</strong>
              </div>
              <div className="book-actions">
                <button onClick={() => handleDeleteBook(book.id)}>
                  {" "}
                  delete book
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="book-actions">
        <button onClick={handleClearBooks}> clearAll books</button>
      </div>
    </div>
  );
};
