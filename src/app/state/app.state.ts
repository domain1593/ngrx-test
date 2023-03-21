import { Book } from "../components/book-list/books.model";


export interface AppState {
  books: Array<Book>;
  collection: Array<string>;
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/