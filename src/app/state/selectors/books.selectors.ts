import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../../components/book-list/books.model';
import { AppState } from '../app.state';


//export const selectBooks = (state: AppState) => state.books;

export const selectBooks = createFeatureSelector<Array<Book>>('books');

//export const selectCollectionState = (state: AppState) => state.collection;

export const selectCollectionState = createFeatureSelector<
   ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collections) => {
    return collections.map((id) => books.find((book) => book.id === id)!);
  }
);