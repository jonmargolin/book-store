// booksSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../types/sherTypes";

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export const selectAllBooks = (state: { books: BooksState }) =>
  state.books.books;
export default booksSlice.reducer;
