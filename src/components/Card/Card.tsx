import React, { FC } from 'react';

import UserCardStyled, {
  SectionContent,
  SpanTitle,
  SpanValue,
} from './Card.styles';
import { User } from './Card.types';

interface Props {
  user: User;
}

const Card: FC<Props> = ({ user }) => {
  return (
    <UserCardStyled data-testid="user-card">
      <SectionContent>
        <SpanTitle>Name:</SpanTitle>
        <SpanValue> {user.name}</SpanValue>
      </SectionContent>
      <SectionContent>
        <SpanTitle>Email:</SpanTitle>
        <SpanValue> {user.email}</SpanValue>
      </SectionContent>
      <SectionContent>
        <SpanTitle>Company:</SpanTitle>
        <SpanValue> {user.company.name}</SpanValue>
      </SectionContent>
      <SectionContent>
        <SpanTitle>Website:</SpanTitle>
        <SpanValue> {user.website}</SpanValue>
      </SectionContent>
    </UserCardStyled>
  );
};

export default Card;
