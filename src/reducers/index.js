import { combineReducers } from 'redux';
//get data from a reducer BooksReducer
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//set application state 'books', 
//so any other component could access to this state 'books'
//这个变量组成了该application的所有state，可以在全局任何一个组件（或container）中访问
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
