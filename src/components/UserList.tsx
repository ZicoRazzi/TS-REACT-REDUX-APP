import React from 'react';
import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action_creators/user';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log('USERS', users);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
