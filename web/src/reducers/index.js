import { combineReducers } from 'redux';
import todosReducer from 'reducers/todosReducer';

export default combineReducers({
  todos: todosReducer,
});
