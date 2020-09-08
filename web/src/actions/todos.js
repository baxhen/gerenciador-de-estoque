import axios from 'axios';
import { ActionTypes } from 'actions';

export async function fetchTodos() {
  const response = await axios.get('/api/fetch/todos');

  return { type: ActionTypes.FETCH_TODOS, payload: response.data };
}

export async function addTodo(todo) {
  const response = await axios.post('/api/add/todo', {
    todo: todo,
  });
  return { type: ActionTypes.ADD_TODO, payload: response.data };
}
export async function deleteTodo(id) {
  await axios.delete(`/api/delete/todo/${id}`);

  return { type: ActionTypes.DELETE_TODO, payload: id };
}
