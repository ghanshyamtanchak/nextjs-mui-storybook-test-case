import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { usersData } from '../../mocks/Users/users';
import Card from './Card';
import { User } from './Card.types';

describe('for card component', () => {
  test('renders card component', () => {
    const user: User = usersData[0];
    render(<Card user={user} />);
    const linkElement = screen.getByText(/Leanne Graham/i);
    expect(linkElement).toBeInTheDocument();
  });
});
