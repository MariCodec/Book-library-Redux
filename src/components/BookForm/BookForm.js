import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import booksData from "../../data/books.json";
import "./BookForm.css";
import { createBookWithId } from "../../utils/createBookWithId";
import { addBook } from "../../redux/slices/bookSlice";
export const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const disaptch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = createBookWithId({ title, author });
      disaptch(addBook(book));

      setTitle("");
      setAuthor("");
    }
  };
  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);

    const randomBook = booksData[randomIndex];
    const randomBookWithId = createBookWithId(randomBook);
    disaptch(addBook(randomBookWithId));
  };
  return (
    <div className="app-block book-form">
      <h2>Book add</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  );
};
