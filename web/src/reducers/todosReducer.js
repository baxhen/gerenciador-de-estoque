import { ActionTypes } from 'actions';
export default function (state = [], action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.payload];
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      return [
        ...state.filter((todo) => {
          return todo.id !== action.payload;
        }),
      ];
    default:
      return state;
  }
}
