import * as a from "./actionTypes";

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: a.DELETE_BOOK,
    payload: bookId,
  };
};

export const clearBook = () => {
  return {
    type: a.CLEAR_ALL_BOOK,
  };
};

export const toggleFavorite = (bookId) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: bookId,
  };
};
// export const filter = (bookId) => {
//   return {
//     type: a.TOGGLE_FAVORITE,
//     payload: bookId,
//   };
// };
