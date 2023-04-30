import * as rtkQuery from '@reduxjs/toolkit/dist/query/react';
import IRTK from '../interfaces/IRTK';

const { createApi, fetchBaseQuery } = ((rtkQuery as IRTK).default ?? rtkQuery) as typeof rtkQuery;

import ICardData from '../interfaces/ICardData';

export const spaceFlightNewsApi = createApi({
  reducerPath: 'spaceFlightNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spaceflightnewsapi.net/v3/' }),
  endpoints: (builder) => ({
    getAPINews: builder.query<ICardData[], string>({
      query: (url) => `articles?_limit=20&title_contains=${url}`,
    }),
  }),
});

export const { useGetAPINewsQuery } = spaceFlightNewsApi;
