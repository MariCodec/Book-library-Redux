// import * as a from "./actionTypes";

// const initialState = [];
// export const booksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case a.ADD_BOOK:
//       return [...state, action.payload];
//     case a.DELETE_BOOK:
//       return state.filter((book) => book.id !== action.payload);
//     case a.CLEAR_ALL_BOOK:
//       return [];
//     case a.TOGGLE_FAVORITE:
//       return state.map((book) =>
//         book.id === action.payload
//           ? { ...book, isFavorites: !book.isFavorites }
//           : book
//       );
//     default:
//       return state;
//   }
// };
