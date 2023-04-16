/* eslint-disable @typescript-eslint/ban-ts-comment */
import matches from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/extend-expect';
import { expect } from 'vitest';
import server from './mocks/server';
import { store } from './redux/store';
import { spaceFlightNewsApi } from './redux/apiSlice';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterEach(() => {
  server.resetHandlers();
  store.dispatch(spaceFlightNewsApi.util.resetApiState());
});

afterAll(() => server.close());

expect.extend(matches);
