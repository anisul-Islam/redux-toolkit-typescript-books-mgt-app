import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'The lord of the ring 1', author: 'Anisul Islam' },
    { id: 2, title: 'The lord of the ring 2', author: 'Albert' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
