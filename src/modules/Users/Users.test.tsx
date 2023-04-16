import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { usersData } from '../../mocks/Users/users';
import Users from './Users';

describe('for users module', () => {
  test('renders users list', () => {
    render(<Users data={usersData} />);
    const linkElement = screen.getByText(/Users List/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('check length of users in users list', () => {
    render(<Users data={usersData} />);
    const linkElement = screen.getAllByTestId('user-card');
    expect(linkElement).toHaveLength(2);
  });
});
