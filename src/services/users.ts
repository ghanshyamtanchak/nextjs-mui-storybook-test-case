import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { User } from '../components/Card/Card.types';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string>({
      query: () => ({
        url: 'users',
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
