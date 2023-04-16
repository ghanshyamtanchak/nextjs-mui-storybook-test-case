import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { usersData } from '../../mocks/Users/users';
import Card from './Card';
import { User } from './Card.types';

export default {
  title: 'User Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const user: User = usersData[0];

export const UserCard: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

UserCard.args = {
  user,
};
