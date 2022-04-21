import { UserAction, UserActionTypes } from '../../types/user';
import { Action, AnyAction, Dispatch } from 'redux';
import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch (err) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Something went wrong by loading of users...so fuck off!',
      });
    }
  };
};
