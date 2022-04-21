import * as UserActionCreator from './user';
import * as TodoActionCreator from './todo';

export default {
  ...TodoActionCreator,
  ...UserActionCreator,
};
