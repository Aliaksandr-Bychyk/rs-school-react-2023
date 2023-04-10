import matches from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom/extend-expect';
import { expect } from 'vitest';
import server from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

expect.extend(matches);
