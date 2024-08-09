import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bookSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    clearBooks: () => {
      return initialState;
    },
    toggleFavorite: (state, action) => {
      // state.forEach((book) => {
      //   if (book.id === action.payload) {
      //     book.isFavorite = !book.isFavorite;
      //   }
      // });
        return state.map((book) =>
              book.id === action.payload
                ? { ...book, isFavorites: !book.isFavorites }
                : book
            );
      // };
    },
  },
});
export const { addBook, deleteBook, clearBooks, toggleFavorite } =
  bookSlice.actions;
export default bookSlice.reducer;
