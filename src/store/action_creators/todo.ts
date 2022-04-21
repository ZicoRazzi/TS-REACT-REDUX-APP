import { TodoAction, TodoActionTypes } from '../../types/todo';
import { Action, AnyAction, Dispatch } from 'redux';
import axios from 'axios';

export const fetchTodo = (page: number = 1, limit: number = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: { _page: page, _limit: limit },
        }
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (err) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload:
          'Something went wrong by loading of todos...so try again or fuck off!',
      });
    }
  };
};

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
}
