import { createSlice } from "@reduxjs/toolkit";
import booksData from "../utils/booksData";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: booksData || [], // Ensure booksData is available or fallback to empty array
    showSearch: false,
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      if (!newBook.id || !newBook.title || !newBook.author) {
        console.error("Invalid book data:", newBook);
        return;
      }
      state.books = [...state.books, newBook];
    },
    setSearchVisibility: (state, action) => {
      state.showSearch = action.payload;
    },
  },
});

export const { addBook, setSearchVisibility } = bookSlice.actions;
export default bookSlice.reducer;
