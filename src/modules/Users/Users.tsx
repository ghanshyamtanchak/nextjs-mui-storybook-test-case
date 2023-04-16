import React, { FC } from 'react';

import Card from '../../components/Card';
import { User } from '../../components/Card/Card.types';
import { HeaderDiv, UsersDiv } from './Users.styles';

interface Props {
  data: User[];
}

const Users: FC<Props> = ({ data }) => {
  return (
    <React.Fragment>
      <HeaderDiv>Users List:</HeaderDiv>
      <UsersDiv>
        {data.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </UsersDiv>
    </React.Fragment>
  );
};

export default Users;
