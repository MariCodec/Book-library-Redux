import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";

import "./BookList.css";

import { selectTitleFilter } from "../../redux/slices/filterSlice";
import { clearBooks, deleteBook, toggleFavorite } from "../../redux/slices/bookSlice";
export const BookList = () => {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitleFilter);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const fileredBooks = books.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());
    return matchesTitle;
  });
  const handleClearBooks = () => {
    dispatch(clearBooks());
  };

  const handleToggleFavorite = (bookId) => {
    console.log(bookId);
    dispatch(toggleFavorite(bookId));
  };
  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>no books available</p>
      ) : (
        <ul>
          {fileredBooks.map((book) => (
            <li key={book.id}>
              <div className="book-info">
                {book.title}by <strong> {book.author}</strong>
              </div>

              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorites ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
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
