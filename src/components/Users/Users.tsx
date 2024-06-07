import React from 'react';
import { User } from '../../type';
import UserItem from './UserItem';

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
