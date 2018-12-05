import {
  combineReducers
} from 'redux';

import navigation from './navigation';
import books from './books';

const reducer = combineReducers({
  books,
  navigation,
})


export default reducer;