import { combineReducers } from 'redux';
//get data from a reducer BooksReducer
import BooksReducer from './reducer_books';

//set application state 'books', 
//so any other component could access to this state 'books'
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
