import { booksReducer } from './reducers/books.reducer';
import { collectionReducer } from './reducers/collection.reducer';

export const combinedReducers = {
  books: booksReducer,
  collection: collectionReducer,
};
