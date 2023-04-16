import React from 'react';

import type { NextPage } from 'next';

import Loader from '../components/core/Loader';
import { COLORS } from '../constants/color';
import Users from '../modules/Users';
import { useGetUsersQuery } from '../services/users';

const loaderStyles = {
  color: COLORS.GRAY,
  height: 20,
  width: 20,
};

const Home: NextPage = () => {
  const { data, isLoading } = useGetUsersQuery('users');

  return (
    <React.Fragment>
      {isLoading && <Loader style={loaderStyles} />}
      {data && <Users data={data} />}
    </React.Fragment>
  );
};

export default Home;
