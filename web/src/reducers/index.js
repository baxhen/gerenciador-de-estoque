import { combineReducers } from 'redux';
import todosReducer from 'components/todosReducer';

export default combineReducers({
  todos: todosReducer,
});
