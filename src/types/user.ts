export interface UserState {
  users: any;
  loading: boolean;
  error: null | string;
}

//ipv typeof in interface gebruik enum

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
  // type: typeof FETCH_USERS
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  // type: typeof FETCH_USERS_SUCCESS
  type: UserActionTypes.FETCH_USERS_SUCCESS;

  payload: any[];
}

interface FetchUsersErrorAction {
  // type: typeof FETCH_USERS_ERROR
  type: UserActionTypes.FETCH_USERS_ERROR;

  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
