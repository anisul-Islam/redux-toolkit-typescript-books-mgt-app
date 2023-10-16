import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/counter/counterSlice';
import booksReducer from './components/books/booksSlice';

export type RootState = {
  booksR: ReturnType<typeof booksReducer>
}

export const store = configureStore({
  reducer: {
    counterR: counterReducer,
    booksR: booksReducer,
  },
});
